
const InputComponentStyle = {
        border: "none",
        boxSizing: "border-box",
        color: "#666666",
        fontSize:  "18px",
        marginTop: "20px",
        padding: "20px",
        width: "100%"
}

export const InputComponent = (props) => {
    return (
        <div>
            <input 
                style={InputComponentStyle}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    );
}