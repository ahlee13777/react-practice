import React from "react";

const Hello = () => {

    const onClick = () => {
        alert("hi");
    }

    const text = "Hello, React";
    
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
};

export default Hello;