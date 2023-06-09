// //ReactElemet는 그냥 리액트에서 사용되는 '요소' , children의 타입을 그렇게 써주는거임
// const Container = (props: {title: string, children: React.ReactElement}) => {
//     const {title, children} = props; 

import { StringLiteralType } from "typescript"

//     return (
//         <div style={{background:'sky'}}>
//             {/* div 블록 레벨 요소, span 인라인 요소(특정부분 감싸거나 스타일 적용) */}
//             <span>{title}</span>
//             <div>{children}</div>
//         </div>
//     )
// }

// const Parent = () => {
//     return (
//         <Container title="Hello">
//             <p>이 부분이 배경색으로 둘러쌓여 있습니다.</p>
//         </Container>
//     )
// }

// export default Parent

type ContainerProps = {
    title: string;
    //ReactElement보다 더 광범위함.(요소, 컴포넌트 다 포함)
    children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
    const {title, children} = props;

    return (
        <div style={{ background:'skyblue' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="hello">
            <p>이 부분을 배경색으로 둘러싸여 있습니다.</p>
        </Container>
    )
}

export default Parent