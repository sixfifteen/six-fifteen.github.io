---
title: "Reducer, action, store, redux"
layout: single
category: React
---

## Action이란?

`store`에서 `state` 변화를 일으킬 때 참조하는 객체이다.
애플리케이션에서 스토어로 보내는 데이터 묶음으로 type과 state변경을 위한 data를 가지고있다.

-  액션은 자바스크립트 객체이며
- 반드시 어떤 형태의 액션인지 나타내는 **type 속성**을 가지고 일반적으로 **문자열**로 정의한다.

```jsx
const ADD_TODO = 'ADD_TODO';

function addTodo() {
return {
  type: ADD_TODO
  text: '08/27 강의 복습하기'
	}
}
```

- ### 애플리케이션이 상태변화를 요구하는 두가지 상황

1. 호출을 시작할 때
2. 응답을 받았을 때

이 때 `reducer`에게 동기적으로 처리하는 액션을 보내야 한다.

1. 요청이 시작되었음을 알리는 액션
2. 요청이 성공했음을 알리는 액션
3. 요청이 실패했음을 알리는 액션



## Reducer란?

상태(state)에 변화를 위해 리듀서 함수가 필요하다.
`action`은 무언가 일어난다는 사실을 기술하고 => 무엇을 바꿀지 지시, 필요한 데이터 제공
`reducer`는 `state`가 어떻게 바뀌는지는 **특정**하는 일을 한다.

`Reducer` 함수는 두 개의 파라미터를 받으며 첫번째는 항상 `state`, 두번째는 `action`
 간단하게 현재상태와 액션을 받아 새상태를 만든다고 보면 된다. (state, action) => new state

```js
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DONE_TODO = 'DONE_TODO';

// Action Creator
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id,
  };
};

// reducer 
// state = {id: , text: , done: ,} 으로 이루어진 객체 리스트
const reducer = (state = [], action) => {
  	swtich (action.type) {
      case ADD_TODO:
      	return [{ text: action.text, id: Date.now(), done: false }, ...state];;
      
      case DELETE_TODO:
      	return state.filter((toDo) => toDo.id !== action.id); // 삭제하려는 것 빼고 반환;
      
      case DONE_TODO:
      	const doneTodo = Object.assign( // 객체를 합치는 함수
          {},
          state.find((toDo) => toDo.id === action.id) 
        );
        doneTodo.done = true; 
      	// state를 find로 순회하며 찾고자하는 객체를 찾아서 done 속성을 true로 바꿔준다.
        return [...state.filter((toDo) => toDo.id !== action.id), doneTodo];
      
      default:
      	return state;
    }
}

// store
const store = createStore(reducer);
```



## Store란?

`state`를 관리하는 **저장소**이며 `reducer`에게 `state`를 전달해주는 역할을 한다.
`state`는 객체형식으로 저장된다.

애플리케이션의 상태를 바꾸는 **유일한 방법**은 `store` 를 통해 `action`을 `dispatch` 하는 것 뿐이다.
하나의 애플리케이션은 하나의 `store`를 가진다.

#### dispatch란?

- `action` 을 인자로 받는 메서드, `reducer`에 `action`이 전달되고 상태가 업데이트 된다.

```jsx
const dispatachAddTodo = (text) => {
  store.dispatch(addTodo(text));
} // addTodo라는 액션을 인자를 받아 리듀서에 전달한다.
```

### 																`데이터 흐름도`

<img src='https://user-images.githubusercontent.com/86995290/129172188-b386d0ca-f3c6-44d8-b569-1b64f3893c27.png' width="100" height="100" >

#### 데이터 흐름

1. `store.dispatch(action)`을 호출한다.

2. `store`가 `reducer` 함수를 호출한다.

3. `reducer`는 전달받은 `action`과 `data`를 가지고 `state`를 변경하고 저장한다.

   

### Redux 3가지 규칙

1. 하나의 애플리케이션은 하나의 `store`를 가진다.
2. `state`는 읽기 전용이다. (immutable)
   - state를 직접 수정 하지 않는다.
   - 배열에 데이터를 추가할때 push가 아닌 concat과 같은 함수를 이용하여 수정
   - spread를 쓴다.
3. `reducer`는 `state`를 `action`을 통해 바꾸기 위해 사용된다.
