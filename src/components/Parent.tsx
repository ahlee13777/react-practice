import React, {memo, useState} from 'react';

type FizzProps = {
    isFizz: boolean;
}

//일반적인 함수, 부모가 다시 그려지면 fizz도 다시
const Fizz = (props: FizzProps) => {
    const { isFizz } = props;
    console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`);
    return <span>{isFizz? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean;
    onClick: () => void;
}

//메모제이션한 함수 컴포넌트, 부모가 다시 그려져도 영향 없음 (onclick이 없다면..)
const Buzz = memo<BuzzProps>((props: BuzzProps) => {
    const { isBuzz, onClick } = props;
    console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`); 
    return <span onClick={onClick}>{isBuzz? 'Buzz' : ''}</span>
})

export const Parent2 = () => {

    const [count, setCount] = useState(1);
    
    //count가 렌더링될 때마다 parent2가 렌더링
    //이때 isFizz의 변경여부없이 이걸받아오는 Fizz가 렌더링됨
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    const onBuzzClick = () => {
        console.log(`Buzz가 클릭됐습니다. isBuzz=${isBuzz}`);
    }
     
    console.log(`Parent가 다시 그려졌습니다. count=${count}`);

    return(
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`현재 카운트: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    )
    
}

export default Parent2;