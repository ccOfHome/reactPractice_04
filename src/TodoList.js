import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

//改成 无状态组件  也是一个UI组件
const TodoList = (props) => {
  const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={handleDelete(props.list)}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// class TodoList extends Component {

//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//   }

//   render() {

//     const { inputValue, changeInputValue, handleClick, handleDelete, list } = this.props;

//     return (
//       <div>
//         <div>
//           <input type="text" value={inputValue} onChange={changeInputValue} />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return <li key={index} onClick={handleDelete}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

//映射数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch()挂载到props上  映射
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    handleDelete(x) {
      console.log(x);
      const action = {
        type: 'remove_item'
      }
      dispatch(action);
    }
  }
}

//让TodoList组件和store进行连接,连接规则在mapStateToProps里边
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

//connect方法把UI组件和业务逻辑相结合，所以上边返回的是一个容器组件
