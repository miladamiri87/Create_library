const books_library = [
  {
    name: "The subtle Art Not Giving a Fuck",
    auth: "Mark Manson",
    price: "20$",
    // img: URL("../../public/Assets/Books/Book01/01.jpg"),
    id: "01",
  },
  {
    name: "The Alchemist",
    auth: "Paulo Coelho",
    price: "10$",
    // img: URL("../../public/Assets/Books/Book01/01.jpg"),
    id: "02",
  },
  {
    name: "Control Your Mind and Master Your Feelings",
    auth: "Eric Robertson",
    price: "13$",
    // img: URL("../../public/Assets/Books/Book01/01.jpg"),
    id: "03",
  },
  {
    name: "Inversion Factor",
    auth: " Linda Bernardi, Sanjay Sarma, and Kenneth Traub",
    price: "14$",
    // img: URL("../../public/Assets/Books/Book01/01.jpg"),
    id: "04",
  },
];

export const getBooks = () => {
  return books_library;
};

export const getBook = (id) => {
  return books_library.find((books_library) => books_library.id === id);
};
