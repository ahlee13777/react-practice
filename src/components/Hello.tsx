const Hello = () => {

    const onClick = () => {
        alert('hello');
    }
    
    const text = 'Hello, React'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

//외부에서 읽을 수 있도록 익스포트
export default Hello 