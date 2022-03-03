
// import React,{useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Blog() {

//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
 
//   // Style here
//       return (
//         <main style={{ padding: "1rem 0" }}>
//           <h2>Blog</h2>
//             <div className="blog-container">
//                   {data.map((item)=>
//                   <><p><h3>{item.title}</h3></p>
//                       <p /><b>{item.date}</b> <i>{item.time}</i>
//                       <p /><img src={item.imageURL} alt={item.title} width="60px" />
//                       <p />{item.content}
                      
//                       <Link
//                         style={{ display: "block", margin: "1rem 0" }}
//                         to={`/blogpost/${item.number}`}
//                         key={item.number}
//                       >Click here</Link></>

//                         )}

//                       </div>
//       </main>
//     );
// }





import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;
