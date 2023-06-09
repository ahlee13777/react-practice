import React from "react";

type ContainerProps = {
    title: string;
    children: React.ReactNode;
}

const Container = (props : ContainerProps) : JSX.Element => {

    const {title, children} = props;

    return (
        <div style={{background:"skyblue"}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )  
}
const Parent = () => {

    return (
        <Container title="hello">
            <p>
                안녕하세용
            </p>
        </Container>
    )
} 

export default Parent; 