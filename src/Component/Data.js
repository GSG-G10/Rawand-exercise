import React, { useEffect, useState } from "react";
import { Pagination,Card } from 'antd';
import 'antd/dist/antd.css'

function Data() {
    const[data,setData]=useState("")
    const[click,setClicked]=useState(1)
    const onChange =()=>{
        setClicked(click+1)
        
    }
    useEffect(() => {
        fetch(`https://api.unsplash.com/search/collections?page=${click}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
          .then((response) => response.json())
          .then((res) => setData(res.results[0]));
      }, [click]);
      const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };
      
return(
    <div>
     <Pagination defaultCurrent={1} total={100} onChange={onChange} />
     <div>

     <Card title="Card Title">
    <Card.Grid style={gridStyle}>Title:  {data.title}</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
    published_at: {data.published_at}
    </Card.Grid>
    <Card.Grid style={gridStyle}>total_photos: {data.total_photos}</Card.Grid>
    <Card.Grid style={gridStyle}>type: {data.tags[0].type}</Card.Grid>
   
  </Card>
       
     </div>
    </div>
)
}
export default Data;