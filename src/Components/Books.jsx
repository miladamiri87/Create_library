import React from "react";
import { getBooks } from "../data_books/data";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Books() {
  const books = getBooks();
  return (
    <div className="container_books">
      <div className="list_books">
        {books?.map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : "black",
              };
            }}
            to={book.id}
            key={book.id}
          >
            {book.name}
          </NavLink>
        ))}
      </div>

      <div className="details_book">
        <Outlet />
      </div>
    </div>
  );
}
