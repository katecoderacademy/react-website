
import React,{useState} from "react";

// import { blogData } from "../data";

// export const Posts = () => {
//   return (
//     <>
//       <div className="blog-container">
//         {blogData.map((data, key) => {
//           return (
//             <div key={key}>
//               {data.title +
//                 " , " +
//                 data.date +
//                 " ," +
//                 data.time +
//                 ", " +
//                 data.imageURL+
//                 ", " +
//                 data.content}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };



export default function Blog() {
  const [data , setData]=useState(null)
  fetch("../data.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )
  
            return (
                <main style={{ padding: "1rem 0" }}>
                  <h2>Blog</h2>
                  <div className="blog-container">
                  {data? data.map(function(data){
                    return (
                        <div>
                          <h3>{data.title}</h3>
                          <b>{data.date}</b>
                          <i>{data.time}</i>
                          <p><img src={data.imageURL} alt={data.title} /></p>
                          <p>{data.content}</p>
                        
                      </div>)
                    }
                  ):""
                }
          </div>
      </main>
    );
}




// const Post = ({ title, date, time, imageURL, content }) => {
//   if (!title) return <div />;
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <h5>{title}</h5>
//           </td>
//           <td>
//             <h5>{date}</h5>
//           </td>
//           <td>
//             <h4>{time}</h4>
//           </td>
//           <td>
//             <img src={imageURL} alt={title} />
//           </td>
//           <td>
//             <p>{content}</p>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };


