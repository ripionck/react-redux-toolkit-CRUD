import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import Footer from "../layouts/Footer";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
