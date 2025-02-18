import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';

const MydModalWithGrid = (props) => {
    const Rname = useRef('');
    const Rcatagories = useRef('');
    const Raddress = useRef('');
    const Rprice = useRef(0);
    const EditedForm = () =>{
        props.onHide();
        
    let Robj = {
        Rn: Rname.current.value,
        Rc: Raddress.current.value,
        Ri: Raddress.current.value,
        Rp: Rprice.current.value
    }
        fetch(`https://food-app-76ef6-default-rtdb.firebaseio.com/admin/recipes/${props.data.rece.key}.json`
            ,{
            method:"PUT",
            body: JSON.stringify(Robj),
            headers:{
              "Content-Type":"application/json",
            },
          }
        ).then(console.log("Edited",props.data.rece.key));
    }
  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Recipies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
            <input type="text" ref={Rname} placeholder="Property name" />
            </Col>
          </Row>

          <Row>
            <Col>
            <select ref={Rcatagories}>
                          <option>Select catagories</option>
                          <option value="1">Villa</option>
                          <option value="2">Apartment</option>
                          <option value="3">Houseboat</option>
                      </select>
            </Col>
            <Col>
            <input type="number" ref={Rprice} placeholder="Price"/>
            </Col>
            <Col>
            <input type="text" ref={Raddress} placeholder="Raddress" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <button className="button1" onClick={EditedForm}>Submit</button>
        <button className="button1" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
    );
}

export default MydModalWithGrid;