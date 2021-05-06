# React-Basic

## React

- npm install yarn --global
- yarn add @fortawesome/fontawesome-free

<br/>

## Class 형식의 React

- React.Component
- React.PureComponent <-> memo
- 단축키 : rcc

<br/>

## Function 형식의 React

- function
- memo(function)(Higher Order Component)(HOC)
- React Hook
- 단축키 : rsi

<br/>

## React-DOM

React라는 것은 순수 자바스크립트이고 자바스크립트를 이용해서 컴포넌트들을 만든다.  
브라우저는 HTML, CSS, 순수 JavaScript 만을 이용할 수 있다.  
BABEL을 이용해서 순수 JavaScript로 변환이 되고, 이렇게 변환된 아이들(컴포넌트)을 HTML과 연결해주는 작업을 해야하는데 이것이 React-DOM이 한다.

<br/>

## JSX

- JSX 파일 render()할 때에는 형제노드로 묶어서 보낼 수는 없다.
- React.Fragment 태그로 묶어서 return() 한다.
- 의미없이 그냥 묶을 때는 React.Fragment를 사용하고, div로 묶어줘야 할때는 div로 묶어줘서 return() 가능 >> 하나의 태그만 리턴해야한다.

### HTML과의 차이점

- className <-> class
- onClick <-> onclick

```Javascript
// JSX
function App(){
  const name = 'Shim'
  return (
    <React.Fragment>
      <h1 className='title' onClick="">Hello {name}</h1>
      <h2>React</h2>
    </React.Fragment>
  )
}
```

```HTML
<!-- HTML -->
<h1 class='title' onclick="">Hello Shim</h1>
<h2>React</h2>
```

<br/>

## State VS Props

### 1. State

- 컴포넌트 안에서 정의한 컴포넌트의 state 오브젝트이다.
- 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로, 이 State라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리액트가 자동적으로 render() 함수를 호출한다.
- [참고](.\src\components\habit.jsx)

  ```javascript
  import React from "react";

  class LikeButton extends Component {
    state = {
      numberOfLikes: 0,
    };
    render() {
      return <button>{this.state.numberOfLikes}</button>;
    }
  }

  export default LikeButton;
  ```

### 2. Props

- 컴포넌트 밖에서 주어지는 데이터이다.
- 컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게, Props는 컴포넌트 `외부`에서 데이터를 제공받는다.
- 아래처럼 부모컴포넌트에서 LikeButton 컴포넌트를 사용할 때 `title`, `onClick`을 인자로 전달해 주면, 이것들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달된다.

  ```javaScript
  class App extends Component{
    handleClick= event => {
      console.log(event);
    }
    render() {
      return
        <LikeButton title={'Like'} onClick={this.handleClick}></LikeButton>
    }
  }
  ```

- 그래서 LikeButton안에서 `this.props.title`, `this.props.onClick` 으로 각각 전달된 'Like'와 'this.handleClick' 함수에 접근 할 수 있다.

<br />

## Ref

DOM에서는 원하는 요소에 접근시에 document.querySelector를 사용하여 접근했다.  
React에서는 원하는 요소에 접근하려면 inputRef = React.createRef()로 객체를 생성해주고, 원하는 요소에 속성으로 ref={this.inputRef}를 사용하면 된다.

```javaScript
inputRef = React.createRef();
<input ref={inputRef} />
```

<br/>

## PureComponent VS Component

[React Doc](https://reactjs.org/docs/react-api.html)

### PureComponent

```
React.PureComponent는 React.Component와 비슷합니다. React.Component는 shouldComponentUpdate()를 구현하지 않지만,
React.PureComponent는 props와 state를 이용한 얕은 비교를 구현한다는 차이점만이 존재합니다.

React 컴포넌트의 render() 함수가 동일한 props와 state에 대하여 동일한 결과를 렌더링한다면,
React.PureComponent를 사용하여 경우에 따라 성능 향상을 누릴 수 있습니다.

주의

React.PureComponent의 shouldComponentUpdate()는 컴포넌트에 대하여 얕은 비교만을 수행합니다.
따라서 컴포넌트에 복잡한 자료 구조가 포함되어있다면,
깊은 차이가 존재함에도 불구하고 차이가 없다고 판단하는 잘못된 결과를 만들어낼 수 있습니다.

props와 state의 구조가 간단할 것으로 예상될 때에만 PureComponent를 상속하고,
깊은 자료 구조의 변화가 있다면 forceUpdate()를 사용하세요.
또는 중첩된 데이터들을 빠르게 비교할 수 있도록 하려면 불변 객체의 사용을 검토해보세요.

더 나아가 React.PureComponent의 shouldComponentUpdate()는 컴포넌트의 하위 트리에 대한 props 갱신 작업을 수행하지 않습니다.
자식 컴포넌트들이 “순수”한지 꼭 확인하기 바랍니다.
```

<br/>

## React Hook

[예시](./src/components/simpleHabit.jsx)

1. React.createRef() <-> useRef
2. state <-> useState
