# Movie App 2020
책: Do it! 클론코딩 영화 평점 웹 서비스

---
## <b>SECTION 01. 안녕 리액트?</b>
- <b>리액트로 클론코딩 시 준비해야 할 것은?</b>
    * Node.js, npm, npx, 비주얼 스튜디오 코드, 깃 설치

- <b>Node.js</b>란?
    * 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼
    * 작성언어로 자바스크립트 활용

- <b>npm(Node Package Module)</b>이란?
    * 자바스크립트 프로그래밍 언어를 위한 패키지 관리자

- <b>npx</b>란?
    * 자바스크립트 패키지 관리 모듈인 npm의 npm@5.2.0 버전부터 새로 추가된 도구
    * 일반적인 npm과 관련하여 약간의 귀찮은 과정들이 필요했던 여러 가지 사항을 크게 단순화

---
## <b>SECTION 02. 리액트로 클론 코딩 시작하기</b>
- <b>creat-react-app?</b>
    * 보일러 플레이트. 명령어 1줄만 입력해서 리액트 개발을 바로 시작할 수 있음 
    * 리액트 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해 주는 도구

- <b>리액트 앱 만들기</b>
    * 터미널에서 다음 명령어 입력
    ~~~
    > npx create-react-app movie_app_2020
    ~~~

    * VSCode 실행 -> 파일 -> 폴더 열기 -> 만들어진 movie_app 폴더  선택

- <b>리액트 앱 실행하기</b>
    * 터미널에서 루트 폴더로 이동 후 다음 코드 입력
    ~~~
    > npm start
    ~~~

    * *여기서 오류!*
    <img width="563" alt="35쪽 오류" src="https://user-images.githubusercontent.com/56288954/87925567-70e56b80-cabb-11ea-8670-5d5454b710c8.png">
    
    * 왜 오류가 생겼을까?
        * 바로 루트 폴더인 movie_app 폴더로 이동을 하지 않았기 때문!
        * 터미널에서 cd movie_app한 후 다시 npm start를 하면 해결됨     

- <b>리액트 동작 원리</b>
    * 작성한 프로젝트 폴더에 있는 코드를 자바스크립트를 이용하여 해석
    * 해석한 결과물을 index.html로 끼워 넣는다
    * *책 50쪽 그림 참고*  

---
## <b>SECTION 03. 리액트 기초 개념 알아보기</b>
- <b>리액트 앱 다시 실행하기</b>
    ~~~
    > npm start
    ~~~
- 실행 결과
 <img width="655" height="500" alt="npm start" src="https://user-images.githubusercontent.com/56288954/87928172-56ad8c80-cabf-11ea-8556-67b9f83da34a.png">

 ## (1) 첫 번째 리액트 기초 개념: 컴포넌트 *(p.58)*
 - 컴포넌트란?
    * 프로그래밍의 한 부분. 재사용이 가능한 최소 단위
 - 리액트는 컴포넌트와 함께 동작, 리액트 앱은 모두 컴포넌트로 구성됨

## (2) 두 번째 리액트 기초 개념: JSX *(p.60)*
 - 컴포넌트는 어떻게 만들까?
    * 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용
    * 중요한 규칙: 이름은 대문자로 시작
    ~~~js
    import React from 'react' //이 코드를 입력해야 리액트가 JSX를 이해할 수 있음

    function Potato(){
       //컴포넌트의 이름은 대문자로
    }

    export default Potato; 
    //이 코드를 추가하면 다른 파일에서 Potato 컴포넌트를 사용할 수 있음
    ~~~

- 리액트는 최종으로 단 한개의 컴포넌트를 그려야한다. 두 개의 컴포넌트를 그리려 한다면 오류가 발생한다. (*p.62*)
    * 그렇다면 App 컴포넌트에 Potato 컴포넌트를 임포트하자! 
    * App.js 파일에 다음 코드 추가
    ~~~js
    import Potato from './Potato';
    // ./는 현재 파일이 있는 폴더라는 뜻(Potato.js 와 App.js는 src 폴더에 같이 있다!)
    ~~~

- Potato.js 파일을 지우고 싶다면? *(p.65~67)*
    * Potato.js 파일을 삭제하고 App.js 피일에서 Potato 컴포넌트를 임포트하는 코드를 지우기
    ~~~js
    import Potato from './Potato'; 
    // 이 코드 삭제
    ~~~

    * 그 다음 App 컴포넌트 안에 Potato 컴포넌트 만들기
    ~~~js
    function Potato() {
        return <h1> I like potato </h1>;
    }
    ~~~

## (3) 세 번째 리액트 기초 개념: props *(p.68)*
 - props란?
    * 간단히 말해 컴포넌트에서 컴포넌트로 전달하는 데이터 

 - 컴포넌트 이름 수정시 컴포넌트를 정의할 때 이름과 컴포넌트를 사용할 때의 이름을 모두 바꿔야한다.
    * *여기서 팁! command + d 단축키 사용하면 한 번에 수정 가능!!*

 - 컴포넌트에 props를 전달하면 props에 있는 데이터 하나의 객체로 변환되어 컴포넌트의(함수)의 인자로 전달, 이걸 받아서 컴포넌트에서 사용할 수 있다.

 - Food 컴포넌트에 사용한 props의 이름: fav
 - fav에 "kimchi"라는 값을 담아 Food 컴포넌트에 보냄
 ~~~js
 <Food fav="kimchi" /> 
 ~~~
 - 주의할 점! props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싸야 한다.
    * ex) something={true}

- Food 컴포넌트에 props에 있는 데이터를 출력하려면?
~~~js
function Food(props){
    return <h1> I like {props.fav}</h1>;
}
~~~

- 구조 분해 할당으로 props 사용하기!
    * props를 좀 더 편리한 방법으로 사용할 수 있다.
~~~js
function Food(props) {
    {fav} = props;
    return <h1>I like {fav}</h1>;
}
~~~
~~~js
function Food({fav}) {
    return <h1>I like {fav}</h1>;
}
~~~

## <b>SECTION 04. 슈퍼 똑똑하게 컴포넌트 만들기</b>
- <b>음식 데이터 만들기</b>
   * foodILike라는 변소로 배열은 만든다
   ~~~js 
   const foodILike = [
  {
    id: 1, // Food컴포넌트가 서로 다르다는 걸 알 수 없기 때문에 key props를 추가함
    name: 'Kimchi', 
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5.0,
  },
  {
    id: 2, 
    name: "Samgyeopsal",
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 4.0,
    }
  ]; 
    ~~~

- map() 함수란?
    * 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환한다.
    ~~~
    > const friends = ["dal", "mark"]
    > friends.map(function(friend){ return friend+"ㅎ"; }) 
    ~~~
    * 이름 없는 함수 friend에 friends 배열의 원소가 넘어오고 그 원소에 "ㅎ"을 붙여 반환한다.
    ~~~
    ["dalㅎ", "markㅎ"]

- map()함수 사용하기
    * 아까 만든 foodILike 배열에 적용해보기
    ~~~js
    function Food({name}) {
        return <h1>I like {name}</h1>;
    } //컴포넌트에서 받는 인자를 {name}으로 수정
    ~~~
    ~~~js
    function App(){
        return (
            <div>
            {foodILike.map(dish => (<Food name{dish.name} />))}
            </div>
        );
    } 
    // dish에 foodILike 배열에 있는 원소가 넘어가고
    // 원소는 {name:'', image:''} 같은 객체형태이므로
    // Food 컴포넌트에 dish.name 과 같이 음식 이름을 name props로 넘겨준 것
    ~~~
    * 이 결과 음식 이름 2개가 화면에 표시된다!

- <b>props 검사하기</b>
    *  props의 자료형을 검사할 수 있도록 만들어 주는 prop-types 도구 설치
    ~~~
    > npm install prop-types
    ~~~
    * prop-types는 컴포넌트가 전달받은 props가 내가 원하는 값인지 확인을 해준다!
- prop-types 적용하기
    * App.js파일에 다음 코드 추가하기
    ~~~js
    import PropTypes from 'prop-types';
    ~~~
    * Food.propTypes 작성하기
    ~~~js
    Food.propTypes = { //props의 자료형, 이름을 검사
  name: PropTypes.string.isRequired, //proptype이 string형이 꼭 필요
  picture: PropTypes.string.isRequired, //isrequired가 없으면 이 항목이 없어도 됨
  rating: PropTypes.number.isRequired, 
  };
    ~~~

- 전체코드(App.js)//음식 목록 출력
~~~js
import React from 'react';
//import Food from './Food' 
//'./'는 현재파일이 있는 폴더(여기서 src)라는 뜻
import PropTypes from 'prop-types';
 
function Food({name, picture, rating}) { 
  // Food 컴포넌트를 App.js 파일에 만들고 이를 App 컴포넌트에서 사용
  //console.log(props); 
  //이 함수는 개발자 도구의 console 탭에만 영향을 줌
  //alt속성: 시각 장애인을 위한 것
  return (
  <div>
    <h1>I like {name}</h1>
    <h3>평점: {rating}/5.0</h3>
    <img src={picture} alt={name}/> 
  </div> );
}

//foodILike 변수에 빈 배열 저장
const foodILike = [
  {
    id: 1, // Food컴포넌트가 서로 다르다는 걸 알 수 없기 때문에 key props를 추가함
    name: 'Kimchi', 
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5.0,
  },
  {
    id: 2, 
    name: "Samgyeopsal",
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 4.0,
  }
]; 

function App() {
  return (
  <div>
    {foodILike.map(dish => 
    (<Food key={dish.id}  //key값을 추가
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating} /> ))}
  </div>
  );
}

Food.propTypes = { //props의 자료형, 이름을 검사
  name: PropTypes.string.isRequired, //proptype이 string형이 꼭 필요
  picture: PropTypes.string.isRequired, //isrequired가 없으면 이 항목이 없어도 됨
  rating: PropTypes.number.isRequired, 
};

export default App;
~~~
이제 5장쓸거얌