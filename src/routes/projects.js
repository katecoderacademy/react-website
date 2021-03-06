
import React,{useState, useEffect } from "react";
import "../styles.css"
// import { Link } from "react-router-dom";

export default function Blog() {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data2.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
 
  // Style here
      return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Projects</h2>
          <div className="projectsgrid">
            
                  {data.map((item)=>
                  <><div className="projecttext"><p><h3>{item.name}</h3></p>
                      <p />{item.description}
                      <p /><img src={item.imageURL} alt={item.title} width="60px" />
                    
                      <a href={item.link}>Click here</a></div></>

                        )}
                      
                      </div>
      </main>
    );
}






