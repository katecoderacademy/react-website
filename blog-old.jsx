import App from App
import React from "react";
import { blogData } from "../data";






export const Posts = () => {
  return (
    <>
      <div className="blog-container">
        {blogData.map((data, key) => {
          return (
            <div key={key}>
              {data.title +
                " , " +
                data.date +
                " ," +
                data.time +
                ", " +
                data.imageURL+
                ", " +
                data.content}
            </div>
          );
        })}
      </div>
    </>
  );
};



export default function Blog() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Blog</h2>
        <div className="blog-container">
        {blogData.map((data, key) => {
          return (
            <div key={key}>
              <Post
                key={key}
                title={data.title}
                date={data.date}
                time={data.time}
                imageURL={data.imageURL}
                content={data.content}
              />
            </div>
        );
      })}
    </div>


      </main>
    );
  }




const Post = ({ title, date, time, imageURL, content }) => {
  if (!title) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h5>{date}</h5>
          </td>
          <td>
            <h4>{time}</h4>
          </td>
          <td>
            <img src={imageURL} alt={title} />
          </td>
          <td>
            <p>{content}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};


