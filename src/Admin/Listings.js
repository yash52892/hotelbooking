import useFetch from "../Fetch";
import List from "./Add/List";

const Listings = ()=>{

    const temp = useFetch(`https://hotelbooking-user-default-rtdb.firebaseio.com/properties.json`);
  
    const arr = Object.entries(temp.data || {});
     
    const rec=arr.map((i)=>(<List rece={{key:i[0], Rc:i[1].Rc, Ri:i[1].Ri, Rn:i[1].Rn, Rp:i[1].Rp, status:i[1].status}}/>));

    return(
        <div className="box1">
          {rec}
        </div>
    )
}

export default Listings;