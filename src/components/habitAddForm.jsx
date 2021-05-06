import React, {memo} from 'react'

const HabitAddForm = memo((props) => {
      
  const inputRef = React.createRef();


  const onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    // name && this.props.onAdd(name);
    
    if(name !== ''){
      props.onAdd(name);
    }
    inputRef.current.value = '';
  }

  
  return (
    <form className="add=form" onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="text" 
        className="add-input" 
        placeholder="Please enter in your habit"/>
      <button className="add-button">Add</button>
    </form>
  )
});

export default HabitAddForm;

// export default class HabitAddForm extends PureComponent {

//   // Ref
//   // DOM에서는 document.querySeletor로 원하는 요소를 지정해 줬다면
//   // React에서는 inputRef = React.createRef()를 선언후,
//   // 원하는 요소에 ref={this.inputRef}를 사용하면 동일한 기능을 한다.
//   inputRef = React.createRef();


//   onSubmit = event => {
//     event.preventDefault();
//     // console.log(this.inputRef.current.value);
//     const name = this.inputRef.current.value;
//     // name && this.props.onAdd(name);
    
//     if(name !== ''){
//       this.props.onAdd(name);
//     }
//     this.inputRef.current.value = '';
//   }

//   render() {
//     // console.log('Habit')
//     return (
//       <form className="add=form" onSubmit={this.onSubmit}>
//         <input 
//           ref={this.inputRef}
//           type="text" 
//           className="add-input" 
//           placeholder="Please enter in your habit"/>
//         <button className="add-button">Add</button>
//       </form>
//     )
//   }
// }
