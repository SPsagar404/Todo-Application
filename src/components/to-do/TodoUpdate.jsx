import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { todoAction } from '../redux/slices/TodoItemSlice';

const TodoUpdate = (props) => {

    const dispatch = useDispatch();

    const [todoItem, setTodoItem] = useState({
        id:null,
        title:'',
        detail:'',
        date:'',
        status:'',

    })

    const updateTodoHandle = () =>{
        dispatch(todoAction.getCurrentTodoData(todoItem));
        props.updateTodoHandle(todoItem);
    }

    const handleFormInput = (e) =>{
        const {name,value} = e.target;
        setTodoItem((prev)=>{
            return ({
                ...prev,
                id:props.todo.id,
                [name]:value
            })
        })
        console.log("handleFormInput 123",todoItem);
        
    }

   useEffect(() => {
        setTodoItem(props.todo);

        console.log("useEffect props sagar 1223",props.todo);
        console.log("useEffect sagar 1223",todoItem);
   },[props.todo])
    

  return (
   <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='mx-auto'>Update Todo</Modal.Title>
          <pre>{JSON.stringify(props.todo)}</pre>
        </Modal.Header>
        <Modal.Body>
        <form className="p-3 w-75 mx-auto">
          <div className="form-group row px-auto my-4">
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
                defaultValue={todoItem.title}
                onChange={handleFormInput}
              />
            </div>
          </div>
          <div className="form-group row px-auto">
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
          <div className="form-group row px-auto my-4">
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
          <div className="form-group row px-auto my-2">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <select className="form-select" aria-label="Default select example" name="status" onChange={handleFormInput} 
              value={todoItem.status}
              >
                <option  selected>Select Status ...</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTodoHandle}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default TodoUpdate