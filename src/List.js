import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
function List() {
 const [data, setstate] = useState([])
 useEffect(async () => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/users`,
    );
    setstate(result.data);
  });
 

 return (
  <div>
   {
    data.map((obj,i)=>{
     return(
     <div key={i} className='container'>
       <span style={{width:50,color:"blue"}}> Id:{obj.id}</span>
       <span> Name:{obj.name}</span>
       <span> Email:{obj.name}</span>
     </div>)
    })
   }
  </div>
 )
}

export default List


