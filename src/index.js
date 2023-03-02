import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Siempre debe haber un elemento que contenga al resto, por eso los div's

root.render(
    <>
        <UserCard
            name="Patri Poncini"
            amount={10000}
            married={true}
            points={[99, 33, 22, 10]}
            adress={{ street: "123 Main Street", city: "San Francisco" }}
            greet={function () { alert("Hello. Stop right there") }}
        />
        <UserCard
            name="Sir Galahad"
            amount={20000}
            married={false}
            points={[12, 14, 55, 13]}
            adress={{ street: "234 Main Street", city: "Colorado" }}
            greet={function () { alert("Hello. What are you doing?") }}
        />
    </>
);