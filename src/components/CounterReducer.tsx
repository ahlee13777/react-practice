import {useReducer} from 'react';

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

//reducer 매개변수: (이전상태, 액션)
const reducer = (currentCount: number, action: Action) => {
    switch(action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET' :
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initialValue: number;
}

const Counter2 = (props: CounterProps) => {
    const { initialValue } = props;

    //useReducer 훅은 reducer, initialValue를 받아서 현상태, 디스패치 반환
    //dispatch함수는 action전달받아서 상태 업데이트를 할때 씀
    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counter2;