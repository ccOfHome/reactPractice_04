import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store'

const App=(
    /* 这个提供器连接了store，那么Provider里所有的组件都有能力获取到store里的内容 */
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App,document.getElementById('root'));

