import React, {useState, useCallback} from 'react';

type ButtonProps = {
    onClick: () => void;
}

const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    console.log('DecrementButton이 다시 그려졌습니다.');

    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo<ButtonProps>((props: ButtonProps) => {
    const { onClick } = props;
    console.log('IncrementButton이 다시 그려졌습니다.');

    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props; 
    console.log('DoubleButton이 다시 그려졌습니다.');

    return <button onClick={onClick}>Double</button>
})

export const Parent3 = () => {
    const [count, setCount] = useState(0); 

    const decrement = () => {
        setCount((c) => c - 1);
    }

    const increment = () => {
        setCount((c) => c + 1);
    }

    //({함수,의존배열) 의존배열의 값에 다른 게 있으면 새 함수를 반환
    //이 코드에서는 항상 비어있으므로 첫번째 함수만 반환 -> 다시 그려지지 않음
    const double = useCallback(() => {
        setCount((c) => c * 2);
    }, [])

    return(
        <div>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement}/> 
            <IncrementButton onClick={increment}/> 
            <DoubleButton onClick={double}/> 
        </div>
    )
} 

export default Parent3