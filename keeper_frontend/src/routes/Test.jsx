import React,{useState} from "react";
import axios from "axios";

function Test(){
    const [resData,setResData] = useState([]);
    const [isData,setIsData]= useState(false);
     function handleClick(event){
        debugger;
        console.log("clicked");
        const url= 'http://localhost:4000/data';
         axios.get(url)
        .then((response)=>{
            console.log(response);
            setResData(response.data);
            setIsData(true);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(<>
    <button onClick={handleClick} >button</button>
    {isData && resData.map((data)=>{
        return(<div key={data.id}>
            <h5>{data.id}</h5>
            <h5>{data.email}</h5>
            <h5>{data.password}</h5>
        </div>

        );
    })}
    </>
        
    );
}
export default Test;