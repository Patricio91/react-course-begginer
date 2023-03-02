import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { TaskCard } from "./Task";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Siempre debe haber un elemento que contenga al resto, por eso los div's

root.render(
    <>
        <TaskCard ready={true} />
        <Button text="Send" />
    </>
);