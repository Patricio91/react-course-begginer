import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Siempre debe haber un elemento que contenga al resto, por eso los div's para contener elementos

const users = [
    {
        id: 1,
        name: "Patricio",
        image: "https://robohash.org/user1"
    },
    {
        id: 5,
        name: "Federico",
        image: "https://robohash.org/user5"
    },
    {
        id: 10,
        name: "Federico",
        image: "https://robohash.org/user10"
    }
]


root.render(
    <>
        {users.map((user, i) => {
            return (
                <div key={i}>
                    <h1>{user.name}</h1>
                    <img src={user.image} />
                </div>
            );
        })}
        {/* <Post /> */}

        {/* <TaskCard ready={true} />
        <Saludar /> */}

        {/* <input id="hi" onChange={handlerChange}></input> */}
        {/* <input id="hi" onDoubleClick={handlerChange}></input> */}
        {/* <Button text="Send" /> */}

        {/* <form onSubmit={(e) => {
            e.preventDefault()
            alert("Sent")
        }}>
            <h1>Sign Up</h1>
            <button>Send</button>
        </form> */}
    </>
);