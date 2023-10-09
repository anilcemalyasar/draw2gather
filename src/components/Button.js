import "./Button.css"

const Button = (props) => {
    

    return (
        <button className="button-erase" onClick={props.onClick}>
            {props.text}
        </button>
    )

}

export default Button;