import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import List from "./List";
import useFetch from "../../Fetch";
import './Add.css';

const Add = () => {
    const Rname = useRef('');
    const Rcatagories = useRef('');
    const Raddress = useRef('');
    const Rprice = useRef(0);
    

    const temp = useFetch(`https://food-app-76ef6-default-rtdb.firebaseio.com/admin/recipes.json`);
  
    const arr = Object.entries(temp.data || {});
     
    const rec=arr.map((i)=>(<List rece={{key:i[0], Rc:i[1].Rc, Ri:i[1].Ri, Rn:i[1].Rn, Rp:i[1].Rp}}/>));
    const addRecipes = (e) => {
        e.preventDefault();
        let Robj = {
            Rn: Rname.current.value,
            Rc: Rcatagories.current.value,
            Ri: Raddress.current.value,
            Rp: Rprice.current.value
        }
        fetch(`https://food-app-76ef6-default-rtdb.firebaseio.com/admin/recipes.json`, {
            method: "POST",
            body: JSON.stringify(Robj),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((res) => res.json().then((data) => console.log(data)));
    };

    return (
        <>
            <div className='container1'>
                <h3>Add Properties</h3>
                <Form onSubmit={addRecipes}>
                    <input type="text" placeholder="Property name" ref={Rname} />
                    <select ref={Rcatagories}>
                        <option>Select catagories</option>
                        <option value="1">Villa</option>
                        <option value="2">Apartment</option>
                        <option value="3">Houseboat</option>
                    </select>
                    <input type="text" placeholder="Address (including city and PIN code)" ref={Raddress} />
                    <input type="number" placeholder="Price per night" ref={Rprice} />
                    <input type="file" accept="image/*" name="images"/>
                    <Form.Control type="submit"/>
                </Form>
            </div>
            {rec}
        </>
    )
}

export default Add;