import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from "./App";
import "./App.css"
import About from "./Components/About";
import Contact_us from "./Components/Contact_us";
import Books from "./Components/Books";
import Book from "./Components/Book";
import NotFound from "./Components/NotFound";
import "../src/Components/style/Style_books.css"
import "../src/Components/style/Style_about.css"
import "../src/Components/style/Style_contact_us.css"
import "../src/Components/style/Style_book.css"
import "../src/Components/style/Style_NotFound.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route path=":bookId" element={<Book/>}></Route>
             </Route>
          <Route path="/contact_us" element={<Contact_us />}> </Route>
          <Route path="/about_us" element={<About />}> </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)