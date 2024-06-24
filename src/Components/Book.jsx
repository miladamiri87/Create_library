import { useParams } from "react-router-dom";
import { getBook } from "../data_books/data";
import React from "react";

export default function Book() {
  let params = useParams();
  let book = getBook(params.bookId);
  if (book) {
    return (
      <div className="container_detail_book">
        <div className="img_detail">
          <img src="" alt="" />
        </div>
        <div className="description">
          Detail:
          <p>{book.name}</p>
          <p>{book.auth}</p>
          <p>{book.price}</p>
          <p>{book.id}</p>
        </div>
      </div>
    );
  } else {
    return <div>Not Found Books</div>;
  }
}
