import "./Add.css";
import MydModalWithGrid from "./EditForm";
import { useState, useRef } from "react";

const List1 = (props) => {
    const date = new Date();
    const Sdate = useRef('');
    const Edate = useRef('');
    const [modalShow, setModalShow] = useState(false);

    const handleBook = () => {
        let Robj = {
            Rn: props.rece.Rn,
            Rc: props.rece.Rc,
            Ri: props.rece.Ri,
            Rp: props.rece.Rp,
            sD: Sdate.current.value,
            eD: Edate.current.value,
            status:-1
        }
        fetch(`https://hotelbooking-user-default-rtdb.firebaseio.com/properties/pending_approval.json`, {
            method: "POST",
            body: JSON.stringify(Robj),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((res) => res.json().then((data) => console.log(data)));
        console.log("booked");
    }
    return (
        <div className='biggerbox'>
            <MydModalWithGrid data={props} />
            <div className='box'>
                <h4>Property Name: {props.rece.Rn}</h4>
                <h5>Address : {props.rece.Ri}</h5>
                <h4>Price/night: {props.rece.Rp}</h4>
                <label for="start">Start date:</label>
                <input type="date" id="start" name="trip-start" min={date} ref={Sdate}/>
                <label for="end">End date:</label>
                <input type="date" id="end" name="trip-end" max="2025-12-31" ref={Edate} />
                <button className="button1" onClick={handleBook}>Book now</button>
            </div>
        </div>
    )
}

export default List1;