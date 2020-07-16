import React from 'react';
//import Food from './Food' 
//'./'는 현재파일이 있는 폴더(여기서 src)라는 뜻
import PropTypes from 'prop-types';
 
function Food({name, picture, rating}) { 
  // Food 컴포넌트를 App.js 파일에 만들고 이를 App 컴포넌트에서 사용
  //console.log(props); 
  //이 함수는 개발자 도구의 console 탭에만 영향을 줌
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
    rating: 5,
  },
  {
    id: 2, 
    name: "Samgyeopsal",
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 4,
  }
]; 
function App() {
  return (
  <div>
    {foodILike.map(dish => 
    (<Food key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating} /> ))}
  </div>
  );
}

Food.PropTypes = { //props의 자료형, 이름을 검사
  name: PropTypes.string.isRequired, //proptype이 string형이 꼭 필요
  picture: PropTypes.string.isRequired, //isrequired가 없으면 이 항목이 없어도 됨
  rating: PropTypes.number.isRequired, 
};

export default App;
