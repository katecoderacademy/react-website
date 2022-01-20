
import React,{useState, useEffect } from "react";

const gitHubUrl = "data.json";


export default function Blog() {
  const [data, setData] = useState({});
  
  
  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    
  const response = await fetch(gitHubUrl);
  const jsonData = await response.json();
  setData(jsonData);
};

  
            return (
                <main style={{ padding: "1rem 0" }}>
                  <h2>Blog</h2>
                  <div className="blog-container">
                 
                        <div>
                          <h3>{data.title}</h3>
                          <b>{data.date}</b>
                          <i>{data.time}</i>
                          <p><img src={data.imageURL} alt={data.title} /></p>
                          <p>{data.content}</p>
                        
                      </div>

          </div>
      </main>
    );
}






