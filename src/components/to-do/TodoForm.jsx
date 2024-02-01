import React, { useState } from "react";

const TodoForm = (props) => {

    const [todoItem, setTodoItem] = useState({
        id:null,
        title:'',
        detail:'',
        date:'',
        status:''

    })

    const handleFormInput = (e) =>{
       
        const {name,value} = e.target;

        setTodoItem((prev)=>{
            return ({
                ...prev,
                id:Math.floor(Math.random() * 100) + 1,
                [name]:value
            }
            )
        })

    }

    const handleItemSubmit = (e) =>{
        e.preventDefault();
        console.log("todoform" ,todoItem);
        props.addTodoItem(todoItem);
        handleCancel();

        console.log(todoItem);

    }

    const handleCancel = () =>{
      setTodoItem({
        id:0,
        title:'',
        detail:'',
        date:'',
        status:''
      })
    }

  return (
    <>
      <div>
        <form className="card shadow-lg p-3 w-75 mx-auto">
          <div className="form-group row px-5 my-4">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title..."
                name="title"
                value={todoItem.title}
                onChange={handleFormInput}
              />
            </div>
          </div>
          <div className="form-group row px-5">
            <label htmlFor="detail" className="col-sm-2 col-form-label">
              Detail
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="detail"
                placeholder="Detail..."
                name="detail"
                value={todoItem.detail}
                onChange={handleFormInput}
              />
            </div>
          </div>
          <div className="form-group row px-5 my-4">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Date
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                name="date"
                id="date"
                placeholder="Date..."
                value={todoItem.date}
                onChange={handleFormInput}
              />
            </div>
          </div>
          <div className="form-group row px-5 my-2">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <select className="form-select" aria-label="Default select example" name="status" onChange={handleFormInput} value={todoItem.status}>
                <option  selected>Select Status ...</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="mx-auto">
          <button type="button" className="btn btn-primary m-4" onClick={handleItemSubmit}>Submit</button>
        <button type="button" className="btn btn-secondary m-4" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
