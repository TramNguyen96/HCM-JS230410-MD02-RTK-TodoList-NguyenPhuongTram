import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import ListTodo from './ListTodo';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTodo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task,setTask] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e,{id, title, date, complete}) => {
    e.preventDefault();
    dispatch(addTodo({id, title, date, complete}))
    setTask("");
    toast.success('Task added successfully!');
  }
  return (
    <>
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                <div className="col">
                    <div
                    className="card"
                    id="list1"
                    style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
                    >
                    <div className="card-body py-4 px-4 px-md-5">
                        <p className="h1 text-center mt-3 mb-4 pb-3 text-dark fw-bold">
                            TODO LIST
                        </p>

                        <ToastContainer/>

                        <div className="d-flex justify-content-center align-items-center mb-4 pt-2 pb-3 ">
                            <div>
                                <Button variant="primary" onClick={handleShow}>
                                    ADD TODO
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>ADD TASK</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control
                                            type="text"
                                            autoFocus
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Status</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                            <option value={isComplete}>Incomplete</option>
                                            <option value={!isComplete}>Complete</option>
                                            </Form.Select>
                                        </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <form onSubmit={(e) => handleSubmit(e, {
                                        id: Date.now(),
                                        title: task,
                                        date: moment().format('YYYY-MM-DD HH:mm:ss'),
                                        complete: false
                                    })} >
                                        <Modal.Footer>
                                            <Button type='submit' variant="primary" onClick={handleClose}>
                                            ADD TASK
                                            </Button>
                                            <Button variant="secondary" onClick={handleClose}>
                                            CANCEL
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                    </Modal>
                                </div>
                            
                            <Form.Select aria-label="Default select example" style={{width:'150px', marginLeft:'400px'}}>
                                <option >All</option>
                                <option value='complete'>Complete</option>
                                <option value='imcomplete'>Incomplete</option>
                            </Form.Select>
                        </div>
                        <ListTodo/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </>
  )
}
