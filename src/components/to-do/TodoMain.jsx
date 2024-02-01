
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '../redux/slices/TodoItemSlice';

const TodoMain = () => {

    const [todoList, setTodoList] = useState([]);

    const dispatch = useDispatch();

    const todo =useSelector((state)=>state.todo);

    const addTodoItem = (todoItem)=>{

        let todoArray =[...todoList];

        if(todoArray.indexOf({id:todoItem.id}) === -1){
            todoArray.push(todoItem);
        }
        setTodoList(todoArray)
        console.log("main",todoList);
    }

    const deleteTodoItem = (index) =>{

        console.log("want to delete :: "+index);
        let todoArray =[...todoList];
        todoArray.splice(index,1);
        setTodoList(todoArray);

    }

    const updateTodoItem = (index) =>{

        console.log("want to upadate :: "+index);
        let todoArray =[...todoList];
        let todo = todoArray[index];

        dispatch(todoAction.getCurrentTodoData({...todo,index}));
        
    }

    const updateTodoHandle = (todoItem)=>{

        let todoArray =[...todoList];
       // let todo = todoArray[todoItem.index];

        // const updatedTodo = todoList.map(todo=>{
        //     (todo.id === todoItem.id)? {
        //         id:todoItem.id,
        //         title:todoItem.title,
        //         detail:todoItem.detail,
        //         date:todoItem.date,
        //         status:todoItem.status}:todo
        // })


        const updatedList = todoList.map((todo=>todo.id !== todoItem.id ?todo:todoItem))

        // todoArray.splice(todoItem.index, 0, {id:todoItem.id,
        //     title:todoItem.title,
        //     detail:todoItem.detail,
        //     date:todoItem.date,
        //     status:todoItem.status});
        //     todoArray.splice(todoItem.index+1,1);
        // console.log("updateTodoHandle sagar 123",todoItem);
        // console.log("redux state sagar 123",todo);

        console.log("updateTodoHandle sagar 123",todoItem)
        console.log("updateTodoHandle todo list sagar 123",todoList)
        setTodoList(updatedList);

    }

    const changeStatus = (index) =>{
        let todoArr = [...todoList];

        console.log("changeStatus",index);
        let item =todoArr[index];
        item.status ="Completed";
  
        console.log(todoArr);

        setTodoList(todoArr);
    }

  return (
    <>
        <div className='display-2' >
            <h1 className='text-center '>TODO APPLICATION</h1>
        </div>
        <div className='container m-3'>
            <TodoForm addTodoItem ={addTodoItem} />
            <TodoList todoList={todoList} key={todoList.length} deleteTodoItem={deleteTodoItem} changeStatus={changeStatus} updateTodoItem={updateTodoItem} updateTodoHandle={updateTodoHandle}/>
            
        </div>
    </>
  )
}

export default TodoMain