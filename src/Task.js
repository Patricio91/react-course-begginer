import "./task.css"

export function TaskCard({ ready }) {
    // const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
    // const titleStyle = { fontWeight: "lighter" }

    return <div className="card" >
        <h1>My first task</h1>
        <span className={ready ? "bg-green" : "bg-red"}>{ready ? "Task completed" : "Task in process"}</span>
    </div >
}