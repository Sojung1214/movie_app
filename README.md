# Movie App 2020
책: Do it! 클론코딩 영화 평점 웹 서비스

---
## 세미나
- 2020.07.21 Chapter01-04 권찬진, 윤소정 발표
- 2020.07.28 Chapter05 김은지 발표
- 2020.08.04 Chapter06, Chapter 07 지유진, 이수균 발표 
- 2020.08.11 Chapter08 최성훈, 김효은 발표
---

## 목차
- [Chapter01 안녕 리액트?](#ch01)
    - 01-1 클론 코딩 수업 준비하기
    - 01-2 왜 리액트일까?
    - 01-3 무엇을 클론 코딩할까?

- [Chapter02 리액트로 클론 코딩 시작하기](#ch02)
    - 02-1 슈퍼 빠른 create-react-app
    - 02-2 깃허브에 리액트 앱 업로드하기
    - 02-3 리액트 앱 살펴보고 수정하기
    - 02-4 리액트 동작 원리 알아보기

- [Chapter03 리액트 기초 개념 알아보기](#ch03)
    - 03-1 리액트 앱 실행 복습하기
    - 03-2 첫 번째 리액트 기초 개념: 컴포넌트
    - 03-3 두 번째 리액트 기초 개념: JSX
    - 03-4 세 번째 리액트 기초 개념: props

- [Chapter04 슈퍼 똑똑하게 컴포넌트 만들기](#ch04)
    - 04-1 비슷한 컴포넌트 여러 개 만들기
    - 04-2 map() 함수로 컴포넌트 많이 만들기
    - 04-3 음식 앱 이리저리 만지고, 고쳐보기
    - 04-4 음식 앱에 prop-types 도입하기

- [Chapter05 state와 클래스형 컴포넌트](#ch05)
    - 05-1 state로 숫자 증감 기능 만들어 보기
    - 05-2 숫자 증감 기능을 제대로 만들어 보기
    - 05-3 클래스형 컴포넌트의 일생 알아보기
    - 05-4 영화 앱 만들기 워밍업

- [Chapter06 영화 앱 만들기](#ch06)
    - 06-1 영화 API 사용해 보기
    - 06-2 영화 데이터 화면에 그리기
    - 06-3 Movie 컴포넌트 만들기
    - 06-4 영화 앱 스타일링하기 - 기초

- [Chapter07 영화 앱 다듬기](#ch07)
    - 07-1 영화 앱 전체 모습 수정하기
    - 07-2 영화 앱 멋지게 스타일링하기

- [Chapter08 영화 앱에 여러 기능 추가하기](#ch08)
    - 08-1 react-router-dom 설치하고 프로젝트 폴더 정리하기
    - 08-2 라우터 만들어 보기
    - 08-3 내비게이션 만들어 보기
    - 08-4 영화 상세 정보 기능 만들어 보기
    - 08-5 리다이렉트 기능 만들어 보기

---

<a id="Ch01"></a>
## <b>#SECTION 01. 안녕 리액트?</b>
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
<a id="Ch02"></a>
## <b>#SECTION 02. 리액트로 클론 코딩 시작하기</b>
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
<a id="Ch03"></a>
## <b>#SECTION 03. 리액트 기초 개념 알아보기</b>
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
---
<a id="Ch04"></a>
## <b>#SECTION 04. 슈퍼 똑똑하게 컴포넌트 만들기</b>
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
---
<a id="Ch05"></a>
## <b>#SECTION 05. state와 클래스형 컴포넌트</b>
 ## (1) state로 숫자 증감 기능 만들기 *(p.112)*
 - state란?
    * 동적 데이터(변경될 가능성이 있는 데이터)를 다룰 때 사용
 - state는 클래스형 컴포넌트에서 사용할 수 있는 개념

 - 클래스형 컴포넌트가 되려면 'App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다는 것'
 - ~~~js
   class App extends React.Component {

   }
   ~~~
- App 컴포넌트가 JSX를 반환해야 하는데 지금의 App 컴포넌트는 함수가 아닌 클래스라서 return문을 사용할수 없다.
- 그렇다면 어떻게 해야 할까?
    * render() 함수를 이용해야 한다!!
    ~~~js
    import React from 'react'
    class App extends React.Component {
        render(){
            return <h1>I'm a class component</h1>;
        }
    }
    export default App;
    ~~~
- 정리!
    * 함수형 컴포넌트는 return 문이 JSX를 반환하고 클래스형 컴포넌트는 render() 함수가 JSX를 반환한다!!

- state는 객체 형태의 데이터, 사용하려면 반드시 클래스형 컴포넌트 안에서! 소문자를 이용하여! state라고 적는다!

- state에 count 값을 추가하고 사용해보자
~~~js
import React from 'react'

class App extends React.Component {
    state = {
         count: 0,
    };

    render(){
         return <h1>I'm a class component</h1>;
    }
}

export default App;
~~~

## (2) 숫자 증감 기능을 제대로 만들어보기 *(p.121)*
- 버튼을 추가하여 동작하게 하려면 render() 함수 안에 밑의 코드를 추가한다
~~~js
<div>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
</div>
~~~

- 리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력한다!
    * 하지만 state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않는다

- 그렇다면 setState() 함수로 count state 변경을 해봅시당!
    * App 클래스에 다음 코드 추가하기
    ~~~js
    add = () => {
        this.setState({count:this.state.count+1});
        // count state를 1만큼 증가
    };
    minus = () => {
        this.setState({count:his.state.count-1});
        // count state를 1만큼 감소
    };
- 하지만 {count: this.state.count+1}와 같이 코드를 작성하여 state를 업데이트를 한다면 성능 문제가 생길 수 있다
- 그렇다면 어떻게 힐끼?
    * setState() 함수의 인자로 함수를 전달하면 성능 문제 없이 state를 업데이트 할 수 있음!
    - 이렇게 코드를 고쳐보자!
    ~~~js
    add = () => {
        this.setState(current => ({
            count: current.count + 1,
        }));
    }
    minus = () => {
        this.setState(current => ({
            count: current.count - 1,
        }));
    }
    ~~~
    - setState() 함수는 바뀐 state의 데이터만 업데이트 한다!

## (3) 클래스형 컴포넌트의 일생 알아보기 *(p.129)*
- 클래스형 컴포넌트의 일생을 만들어 주는 생명주기 함수를 알아보자
- 왜 공부할까?
    - 생명주기 함수를 이용해서 영화 데이터를 가져와야 한다!

## 3-1 constructor() 함수
- 다음 코드를 추가하여 render함수와 constructor함수 중 어떤 것이 더 빨리 실행되는지 보자
~~~js
constructor(props){
    super(props);
    console.log('hello')
}
~~~
~~~js
render(){ //render() 함수에 다음 코드 추가
    console.log('render')
}
~~~
- **함수 실행 순서: constructor()함수 > render()함수**

## 3-2 componentDidMount() 함수 
- 다음 코드를 추가하여 render함수와 constructor함수, componentDidMount함수 중 어떤 것이 더 빨리 실행되는지 보자
~~~js
constructor(props){
    super(props);
    console.log('hello')
}

componentDidMount(){
    console.log('componen rendered');
}
~~~
~~~js
render(){ //render() 함수에 다음 코드 추가
    console.log("I'm rendering")
}
~~~
- **함수 실행 순서: constructor()함수 > render()함수 > componentDidMount()함수**

- 다음 생명주기 함수는 리액트에서 업데이트(Update)로 분류한 생명주기 함수이다!
## 3-3 componentDidUpdate() 함수
- 다음 코드를 추가해보자
~~~js
componentDidMount(){
    console.log('I just updated');
}
~~~
- 이 함수는 화면이 업데이트되면 실행된다
    - 예를 들어, <Add> or <Minus> 버튼을 누를 경우 setState()함수가 실행되면 자동으로 render() 함수가 다시 실행되면서 화면이 업데이트 됨!

- **함수 실행 순서: setState()함수 > render()함수 > componentDidUpdate()함수**
- 다음은 컴포넌트가 죽을 때, 언마운트(Unmount)로 분류한 생명주기 함수이다!

## 3-4 componentWillUnmount() 함수
- 다음 코드를 추가해보자
~~~js
componentWillUnmount(){
    console.log('Goodbye, cruel world');
}
~~~
- 이 함수는 아직 실행되지 않는다!
- 왜냐?
    - 아직 컴포넌트가 화면에서 떠나게 만드는 코드가 없기 때문!!!

## (4) 영화 앱 만들기 워밍업 *(p.135)*
- 클래스형 컴포넌트의 생명주기 함수를 적용, Movie 컴포넌트 구성하기!

- 1. App 컴포넌트를 비우고 영화 앱 로딩상태를 구분해 줄 변수 isLoading state를 추가하기
- 2. '로딩 중이다'와 같은 문장을 화면에 출력할 수 있게 구조 분해 할당과 삼항 연산자를 활용해서 문장 출력할 수 있는 코드 필요 
- 다음 코드를 추가하자
~~~js
import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true,
    };
    // 구조 분해 할당으로 this.state에 있는 isLoading을 얻으면 항상 this.state입력 안해도 된다!!
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'}<div />;
    }
}

export default App;
~~~

- 3. setTimeout()함수를 이용해서 데이터가 로딩되는 현상을 구현
    - settimeout() 함수는 첫 번째 인자로 전달한 함수를 두 번째 인자로 전달한 값(밀리초)후에 실행
    - 6초 후에 isLoading state를 false로 바꿈
    - 다음 코드 실행 시 'Loading...'문장이 6초 후에 'We are ready'라는 문장으로 바뀐다!!

    ~~~js
    componentDidMount() {
        settimeout(() => {
            this.setState({isLoading: false}) // state바꾸기 위해 setState 이용!
        }, 6000);
    } // 첫 번째 인자로 setTimeout전달, 두 번째 인자로 6000밀리초 전달
    ~~~
    - 그러면 'We are ready' 문장 출력대신 영화 데이터를 출력하면 되겠지?

- 로딩된 영화 데이터를 저장할 수 있도록 movies state를 만들면 되겠다! **(자료형: 배열)**
- 다음 코드로 수정
~~~js
state = {
    isLoading: true,
    movies: [],
};
~~~

<a id="Ch06"></a>
## <b>#SECTION 06. 영화 앱 만들기</b>
## (1) 영화 API 사용해 보기 *(p.142)*
- 영화 데이터를 로딩하 위해 axios라는 도구 사용
~~~js
> npm install axios  //axios 설치하기
~~~
- getMovies() 함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기
~~~js
 getMovies = () => {
    const movies = axios.get("https://~~");
} // axios.get()이 반환한 결과를 movies에 저장
componenetDidMount() {
    this.getMovies();
}
~~~
- 이렇게 하면 componentDidMount() 함수가 실행되면 this.getMovies()가 실행된다
   - 이때 자바스크립트에게 'getMovies() 함수는 시간이 필요해'라고 해야만 axios.get()이 반환한 데이터를 제대로 잡을 수 있다!
   - 그렇게 하기 위해서는 <b>async, await</b>가 필요하다!

- getMovies()에 async를 붙이고, axios.get()에 await를 붙이자
~~~js
getMovies = async () => {
    const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");
};
~~~
- async: getMovies() 함수는 시간이 필요하다고 말하는 것
- await: axios.get()의 실행을 기다려 달라고 말하는 것

- 정리!
  * API에서 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하고, 그 사실을 자바스크립트에게 알려야만 데이터를 잡을 수 있으므로 async, await를 사용함

## (2) 영화 데이터 화면에 그리기 *(p.153)*
- console 탭을 보면 data키 안에 data키가 있고 그 안에 movies 배열이 있다
  - data -> data -> movies 순서대로 객체에 접근하면 원하는 데이터를 추출할 수 있다!
  - 위의 코드를 아래 코드처럼 바꿔보자
  ~~~js
    getMovies = async () => {
    const {data: {
        data: {movies},
    },
    } = await axios.get("http://yts-proxy.now.sh/list_movies.json");
     this.setState({movies: movies });
     }; // 여기서 앞의 movies는 state, 뒤의 movies는 구조 분해 할당으로 얻은 영화 데이터가 있는 변수
     //movies: movies는 키와 대입할 변수의 이름이 같음 -> movies로 축약 가능!
  ~~~

- isLoading state true에서 false로 업데이트 하기

~~~js
this.setState({movies, isLoading: false});
~~~
- 코드를 바꿔보면 처음에는 'Loading...' 이 화면에 보이다가 조금 뒤에 'We are ready'로 바뀐다

## (3) Movie 컴포넌트 만들기 *(p.162)*
- src 폴더에 Movie.js 파일을 만들고 Movie 컴포넌트의 기본 골격을 작성해보자
~~~js
import React from 'react';
import PropTypes from 'prop-types';

function Movie() {
    return <h1></h1>;
}

Movie.proptypes = {};
export default Movie;
~~~
- Movie 컴포넌트는 state가 필요하지 않음 -> 클래스형 컴포넌트가 아닌 함수형 컴포넌트로 작성한다

- 다음으로는 Movie.propTypes를 작성해보자
  - 먼저 id를 Movie.propTypes에 추가하자
  ~~~js
  Movie.propTypes = {id: PropTyes.number.isRequired}; //자료형이 number, 반드시 있어야 하므로 isRequired 사용
  ~~~
  - 나머지도 추가해보기
  ~~~js
  Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,  //이미지 주소: 문자열
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
  };
  ~~~

- 평점 순으로 데이터를 정렬하기 위해서는 'sort_by=rating'을 사용한다!
 - "http://yts-proxy.now.sh/list_movies.json?sort_by=rating" 이렇게 바꿔주기!

- App 컴포넌트에서 Movie 컴포넌트 그리기
  - 구조 분해 할당으로 this.state에 있는 movies를 얻은 다음, App 컴포너트에서 We are ready를 출력하고 있는 자리에 movies.map()을 사용하자!
  ~~~js
  // App.js
  render() {
      const { isLoading, movies} = this.state;
      retun <div>{isLoading ? 'Loading...':movies.map()}</div>;
  }
  ~~~

- Movie 컴포넌트 반환하도록 movies.map() 수정하기
~~~js
//App.js
import Movie from './Movie'; // Movie 컴포넌트를 임포트
...
render() {
      const { isLoading, movies} = this.state;
      retun <div>
         {isLoading ? 'Loading...'
            :movies.map((movie) => { // movies는 배열이고, 배열의 원소 1개가 movie로 넘어옴
                console.log(movie);
                return <Movie />; //여기서 Movie 컴포넌트를 출력
            })}
            </div>;
  }
...
~~~

- Movie 컴포넌트에 props 전달하기
~~~js
//App.js
import Movie from './Movie'; // Movie 컴포넌트를 임포트
...
render() {
      const { isLoading, movies} = this.state;
      retun <div>
         {isLoading ? 'Loading...'
            :movies.map((movie) => { // movies는 배열이고, 배열의 원소 1개가 movie로 넘어옴
                console.log(movie);
                return <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />; //여기서 Movie 컴포넌트를 출력
            })}
            </div>;
  }
...
~~~

## (4) 영화 앱 스타일링 하기-기초 *(p.177)*
- 스타일링의 핵심은 CSS! 하지만 CSS를 적용할 HTML도 필요하니 우선 HTML을 작성해보자

- App 컴포넌트에 HTML 추가하기
  - App 컴포넌트가 반환할 JSX의 바깥쪽을 <section class="container></section>으로,
  - 'Loading...'은 <div class="loader"><span class="loader__text"></span></div>로,
  - movies.map()은 <div class="movies"></div>로 감싸자
~~~js
//App.js
return (<section className="container"> 
    {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>)
     : (
     <div className="movies"> 
      {movies.map((movie) => ( //movie 컴포넌트 감싸기
       <Movie 
        ...
       />
       //Movie 컴포넌트 출력
     ))}
    </div>
     )}
     </section>
~~~

- Movie 컴포넌트에 HTML 추가하기
  - Movie 컴포넌트가 반환할 JSX를 <div class="movie"></div>로 감싸고, 그 안에서 title, year, summary를 목적에 맞는 엘리먼트로 감싸자
  ~~~js
  // Movie.js
  <div className ="movie__data">
    <h3 className="movie__title">{title}</h3>
    <h5 className="movie__year">{year}</h5>
    <p className="movie__summary">{summary.slice(0, 180)}...</p> 
  </div>
  ~~~

  - 영화 포스터 이미지 추가하기
    - poster props를 추가해보자
    - 전체 엘리먼트를 감싸는 div 엘리먼트를 추가하고 img 엘리먼트를 <div class="movie__data"> 위에 추가해서 img엘리먼트의 src속성에는 poster props를, alt, title 속성에는 title props를 전달
    ~~~js
    //Movie.js
    return (
        <div className = "movie">
            <img src={poster} alt = {title} title={title} />
        
        <div className ="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0, 180)}...</p> 
        </div>
        </div>
    ~~~

- CSS 파일 생성하기
  - src 폴더에 Movie.css, App.css파일을 만들자
  - 그 후, App, Movie 컴포넌트에 App.css, Movie.css를 각각 임포트 하자
  ~~~js
  //App.js
  import './App.css';
  //Movie.js
  import './Movie.css';
  ~~~

<a id="Ch07"></a>
## <b>#SECTION 07. 영화 앱 다듬기</b>
- 이 책에서는 CSS원리나 작성하는 방법을 자세히 설명하지 않고 직접 코드를 수정해보면서 익숙해지도록 한다!
- 스타일링하는 것은 책의 코드를 따라치는 것이므로 CSS에 대해 정리할 것이다!

- CSS: Cascading Style Sheets, 웹페이지를 꾸미기 위해 작성하는 코드

- 지금의 웹은 반응성을 주요시 한다!
- HTML로 웹페이지를 설계할 때는 보통 Table을 주로 사용하였는데, 이는 각 데이터의 위치가 정해져있기 때문에 구성이 복잡해지고 불편하다

- HTML과 JS, 그리고 CSS의 개별적인 설계는 각각의 유지보수와 효율적인 작업에 도움을 주고, 각 요소가 지원하는 상호작용으로 애니메이션이나 화려한 연출이 가능하다
- @media 쿼리와 같은 CSS3의 기능으로 모바일 디바이스의 작은화면을 같은 HTML에서 보여줄 수 있게 됩니다.

- 생김새
 P (//selector) {
    color (//Property) : red (//Property value)
}