import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons";
import "./App.css";

function Show() {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [name1, setName1] = useState();


  const handleClose = () => setShow(false);
  const handleShow = (ele) => {
    setShow(true);
    setName1(ele);
  };

  useEffect(() => {
    axios
      .get("http://104.251.223.235:1337/api/restaurants")
      .then((data) => {
        console.log(data["data"].data);
        setdata(data["data"].data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const delete1 = (id) => {
    axios
      .delete("http://104.251.223.235:1337/api/restaurants" + id)
      .then((data) => {
        console.log(id);
      })
      .catch((error) => {
        console.log("error");
      });
  };

function editData(){
    axios.put('',).then((data)=>{
      console.log(data)
    }).catch((error)=>{
      console.log('error from eidt')
    })
}

const chengeName=(e)=>{
setName1(e.target.value)
console.log(name1+'this is from chenge')
}

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Create At</th>
                <th>Update AT</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, id) => {
                return (
                  <tr>
                    <td key={id}>{ele.id}</td>
                    <td>{ele.attributes.name}</td>
                    <td>{ele.attributes.publisheedAt}</td>
                    <td>{ele.attributes.updatedAt}</td>

                    <td>
                      {/* <DeleteOutlineIcon/> */}
                      <span>
                        <Button
                          variant="outline-warning"
                          onClick={() => handleShow(ele.attributes.name)}
                        >
                          EDIT
                        </Button>{" "}
                       <AiFillDelete/>
                     
                        <Button
                          variant="outline-warning"
                          onClick={() => delete1(ele.id)}
                        >
                          DELETE
                        </Button>{" "}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label htmlFor="name"> Name :-</label>
                <input type="text" 
                value={name1}
                onChange={chengeName}
                
          />
                &nbsp;&nbsp;
                <Button style={{ padding: "3px" }} variant="outline-warning"  onClick={editData}>
                 
                  Edit Data
                </Button>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Show;
