//이름 없는 화살표 함수로 함수 컴포넌트를 정의하기, 그리고 Text라는 변수에 대입
//여기서 props는 {content: "blah blah"}와 같은 형태를 갖게됨
//굳이 이런형식으로 받는이유는 content하나만 전달하는것이 아니라 color같은 것도 전달해야되니까 항상 이런식으로 받아오기!
const Text = (props : {content: string}) => {
    //객체 분해 할당 props에서 content를 빼는 거임
    const {content} = props;
    //p태그: 단락, 위아래 여백, 문단 구분
    return <p className="text">{content}</p>
}

//일단 props아무것도 안받아온 상태임.
const Message = (props : {}) => {
    const content1 = 'This is parent component';
    const content2 = 'Messsage uses Text component';

    return(
        <div>
            {/* {}이건 변수를 사용하겠다 */}
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message