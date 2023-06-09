import {useState} from 'react'; 

type CounterProps = {
    initialValue: number;
}

//직접 매개변수로 initialValue를 받을 수 있지만, 유연성 확장성 등때문에 props 사용
const Counter = (props: CounterProps) => {

    const { initialValue } = props;

    const [count, setCount] = useState(initialValue);

    // 배열 해체 할당으로도 가능 
    // const state = useState(initialValue);
    // const conunt = state[0];
    // const setCount = state[1];

    return (
        <div>
            <p>Count: {count}</p>
            {/* 그냥 매개변수 쓰기 vs 함수 쓰기 둘다 가능 */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1) }>+</button>
        </div>
    )
}

export default Counter;