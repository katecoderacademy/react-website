import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './routes/blog';
import Projects from './routes/projects';
import Home from './routes/home';
import Contact from './routes/contact';
import Blogpost from './routes/blogpost';

const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":blogpostId" element={<Blogpost />} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    /> 
          </Route>
            


    </Routes>
  </BrowserRouter>,
rootElement
);
