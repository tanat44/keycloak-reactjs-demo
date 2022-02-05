import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RequireRoles from "./RequireRoles";

import SecretBooks from "./SecretBooks";

const BookBox = () => (
  <React.Fragment>
    <Menu/>
    <Routes>
      <Route path="/" element={<BookList/>}/>
      <Route exact path="/books/new" element={<BookForm/>}/>
      <Route path="/books/:bookId" element={<BookDetails/>}/>
      <Route path="/secret" 
        element={
          <RequireRoles roles={["admin"]}>
            <SecretBooks/>
          </RequireRoles>
      }/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </React.Fragment>
)

export default BookBox
