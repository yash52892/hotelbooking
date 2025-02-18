import "./Add.css";
import MydModalWithGrid from "./EditForm";
import { useState } from "react";

const List=(props)=>{
    console.log(props);
    const [modalShow, setModalShow] = useState(false);
    const handleEdit = (data) => {
        setModalShow(true);
      };

    const handleDelete = () =>{
        fetch(`https://hotelbooking-user-default-rtdb.firebaseio.com/properties/${props.rece.key}.json`
            ,{
            method:"DELETE",
            headers:{
              "Content-Type":"application/json",
            }
          }
        ).then(console.log("Deleted",props.rece.key));
    }
    return(
       <div className='biggerbox'>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} data={props}/>
                <div className='box'>
                    <h4>Property Name: {props.rece.Rn}</h4>
                    <h5>Address : {props.rece.Ri}</h5>
                    <h4>Price/night: {props.rece.Rp}</h4>
                    <button className="button1" onClick={handleEdit}>Edit</button>
                    <button className="button1" onClick={handleDelete}>Delete</button>
                    
                </div>
        </div>
    )
}

export default List;