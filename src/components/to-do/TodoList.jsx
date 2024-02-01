import React, { useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {


       

  return (

        
        <>
            <div className='mx-auto my-2'>
            {props.todoList.map((todo,index)=>{
                console.log("todo",todo);
            return(
                <TodoItem todo={todo} key={index} index={index} deleteTodoItem ={props.deleteTodoItem} changeStatus={props.changeStatus} updateTodoItem={props.updateTodoItem} updateTodoHandle ={props.updateTodoHandle}/>
            )
        })}
            
            </div>
        </>
    )
}

export default TodoList