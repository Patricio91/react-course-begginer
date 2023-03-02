import PropTypes from "prop-types";

export function Button({ text, name }) {
    console.log(text);
    if (!text) {
        console.error("The text is required")
    }
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: "Someone"
}