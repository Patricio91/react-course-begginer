export function Greeting({ title, name = "User" }) {
    return <h2>{title}, dice {name}</h2>
}

export function UserCard({ name, amount, married, adress, greet }) {
    console.log(name, amount, married, adress, greet)
    return <div>
        <h1>Name: {name}</h1>
        <p>Amount: 💲{amount}</p>
        <p>{married ? "I'm married. Don't talk to me" : "I'm single, only for you"}</p>
        <ul>
            <li>City: {adress.city}</li>
            <li>Street: {adress.street}</li>
        </ul>
    </div>
}