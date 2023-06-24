import './App.css';
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Header from "./routes/Header";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<Header />}>
            <Route path={"/"} element={<Root />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/login"} element={<Login />} />
        </Route>
    )
);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
