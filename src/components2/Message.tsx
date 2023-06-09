import React from "react";

const Text = (props: {content: string}) => {

    const {content} = props;

    return(
        <p className="text">{content}</p>
    )
}

const Message = () => {
    
    const text1 = "This is parent component";
    const text2 = "Messsage uses Text component";

    return (
        <div>
            <Text content={text1}/>
            <Text content={text2}/>
        </div>
    )
}

export default Message;