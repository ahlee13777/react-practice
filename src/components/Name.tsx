//react 객체를 가져와 사용하기 위한 구문 (생략가능)
import React from 'react'

const Name = () => {

    //input 요소의 onchange 이벤트에 대한 콜백 함수 정의 
    //changeEvent자체가 제공되는 제네릭타입임.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //e.target 이벤트가 발생한 요소, .value 요소의 값
        console.log(e.target.value)
    }

    return( //리턴값은 하나만 가능
//    first{}: js쓰겠다 second{}:객체리터럴(객체 생성표기법)을 나타내겠다(여러개쓰겠다)
        <div style = {{padding: '16px', backgroundColor: 'grey'}}>
            {/* labe: 인터페이스 항목의 설명을 나타냄. input밖 or 안에서 사용. htmlFor에 id 등을 적어 input과 연결 */}
            <label htmlFor="name">이름</label>
            {/* className은 css클래스 지정해서 스타일 적용, onChange={함수} */}
            <input id="name" className="input-name" type="text" onChange={onChange}/>
        </div>
    )
}

export default Name 