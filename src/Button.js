import PropTypes from "prop-types";

export function Button({ text, name }) {
    if (!text) {
        console.error("The text is required")
    }
    return <button onClick={function () {
        alert("Hi bro")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: "To the backend"
}