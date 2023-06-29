import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo} from '../redux/todoSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export default function ItemTodo({id, title, date}) {
    const dispatch = useDispatch()
    const [isComplete, setIsComplete] = useState(false)

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
        toast.success('Task deleted successfully!');
    }

  return (
    <div>
        <div>
            <ul className="list-group mb-0">
                <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                        <div>
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                checked={isComplete}
                                onChange={()=> setIsComplete(!isComplete)}
                            />
                            <span style={isComplete ? {textDecoration:'line-through'} : {}} className='titleText'>{title}</span>
                            <p className='dateText'>{date}</p>
                        </div>
                    </div>
                    <div>
                        <a
                            href="#!"
                            className="text-info"
                            data-mdb-toggle="tooltip"
                            title="Edit todo"
                        >
                            <i className="fas fa-pencil-alt me-3"
                            />
                        </a>
                        <a
                            href="#!"
                            className="text-danger"
                            data-mdb-toggle="tooltip"
                            title="Delete todo"
                        >
                            <i className="fas fa-trash-alt"
                                onClick={() => handleDelete(id)}
                            />
                        </a>
                    </div>
                
                </li>
            </ul>
        </div>
    </div>
  )
}
