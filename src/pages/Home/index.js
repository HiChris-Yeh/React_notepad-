// import React from 'react' // it can import automatically
import { useEffect, useState, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./compoment/Edit";
import List from "./compoment/List";
import "./index.css";

async function fetchData(setData){
  const res = await fetch(API_GET_DATA)
  const {data} = await res.json() // {data} means get res.data
  setData(data)
}


async function fetchSetData(data){
    await fetch(API_GET_DATA,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({data})
    })
  }

const Home = () => {
  const [data, setData] = useState([]);
  const SubmissionStatus = useRef(false);

  useEffect(()=>{
    if(!SubmissionStatus.current){
        return
    }
    fetchSetData(data)
    .then(data=>SubmissionStatus.current = false)
  }, [data])

  useEffect(()=>{
    fetchData(setData)
  }, [])
  return (
    <div className="app">
      <Edit add={setData} SubmissionStatus={SubmissionStatus} />
      <List listData={data} deleteData={setData} SubmissionStatus={SubmissionStatus} />
    </div>
  );
};

export default Home;
