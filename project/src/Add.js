import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import axios from 'axios'
import './App.css'

function Add() {
const[state,setState]=useState({
   name:''
})
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const get =(e)=>{
   setState({[e.target.name]:e.target.value})
   console.log(state)
  }

function addData(){
    axios.post('http://104.251.223.235:1337/api/restaurants/',state).then((data)=>{
      console.log(data)
    })
}

  return <div  >
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor='name' > Name :-</label>
          <input type='text' name="name" onChange={get}/>
          &nbsp;&nbsp;
          <Button   style={{padding:'3px'}} variant="outline-warning" onClick={addData}>
            Add data
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <Button style={{marginTop:'100px'}} variant="outline-warning" onClick={handleShow}>Add Data</Button>{' '}
  </div>;
}

export default Add;
