import React, { useState } from "react";
import TodoUpdate from "./TodoUpdate";
import { useSelector } from "react-redux";

const TodoItem = (props) => {
  
  const todo =useSelector((state)=>state.todo);
  const [show, setShow] = useState(false);

  const updateTodoHandle = (todoItem)=>{
    props.updateTodoHandle(todoItem)
    setShow(false);
  }
  const handleClose = () => {
    setShow(false)};

  const handleShow = (index) => {
    console.log("handleShow",index);
    props.updateTodoItem(index);
    console.log("redux state 123",todo)
    setShow(true);}


  const date = props.todo.date.split("-");
  const dayName = new Date(props.todo.date).toLocaleString("en-us", {
    weekday: "long",
  });

  const handleStatus = (index) => {
    console.log("sagar index ", index);
    props.changeStatus(index);
  };

  const handleDeleteItem = (index) => {
    props.deleteTodoItem(index);
  };

  return (
    <>
      <div className="card shadow-lg p-3 w-75 mx-auto my-2 ">
        <div className="d-flex  ">
          <div>
            <div className="card-body text-center justify-content-center">
              <h1 className="display-4 ">{date[2]}</h1>
              <h5 className=" ">{`${date[1]}/${date[0]}`}</h5>
              <h3 className="display-6 ">{dayName}</h3>
            </div>
          </div>
          <div>
            <div className="card-body  text-center justify-content-center">
          
              <div>
                <h3 className="text-center">
                  {props.todo.title}{" "}
                  {props.todo.status === "Completed" && (
                    <span className="badge bg-success">
                      {props.todo.status}
                    </span>
                  )}
                  {props.todo.status === "Pending" && (
                    <span className="badge bg-primary">
                        {props.todo.status}
                    </span>
                  )}
                </h3>
                <p className="text-center">{props.todo.detail}</p>
              </div>
              <div className="m-5">
              {props.todo.status === "Pending" &&
                <button
                  className="btn btn-primary float-end "
                  style={{ position: "absolute", right: 250, bottom: 30 }}
                  onClick={() => handleStatus(props.index)}
                >
                  Completed
                </button>
                }
                {props.todo.status === "Completed" &&
                <button
                    disabled
                  className="btn btn-success float-end "
                  style={{ position: "absolute", right: 250, bottom: 30 }}
                >
                  Completed
                </button>
                }
                <button
                  className="btn btn-warning float-end "
                  style={{ position: "absolute", right: 150, bottom: 30 }}
                  onClick={()=>handleShow(props.index)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger float-end "
                  style={{ position: "absolute", right: 50, bottom: 30 }}
                  onClick={() => handleDeleteItem(props.index)}
                >
                  Delete
                </button>
              </div>
               <TodoUpdate show={show} handleClose={handleClose} todo={todo} updateTodoHandle={updateTodoHandle}/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
