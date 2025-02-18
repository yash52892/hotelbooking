import useFetch from "../Fetch";
import List1 from "../Admin/Add/List1";

const Listings = ()=>{

    const temp = useFetch(`https://hotelbooking-user-default-rtdb.firebaseio.com/properties.json`);
  
    const arr = Object.entries(temp.data || {});
     
    const rec=arr.map((i)=>(<List1 rece={{key:i[0], Rc:i[1].Rc, Ri:i[1].Ri, Rn:i[1].Rn, Rp:i[1].Rp}}/>));

    return(
        <div className="box1">
          {rec}
        </div>
    )
}

export default Listings;