
import React from 'react'

function ObjList() {
    const obList = [
        { id:1, name: "Ujjawal", phone:123 },
        { id:2, name: "Yuvraj", phone:456 },
        { id:3, name: "Gazala", phone:789 },
        { id:4, name: "Tanuja", phone:258 }
    ]
    
    return (
        <div style={{background:"#cbe0e2", width:"50%", padding:"2rem"}}>
            <h1>LIST</h1>
            { 
             obList.map((ob, index) =>
             (  
                <>
                <h3>{`Person - ${index + 1}`}</h3>
                <ul>
                <li key={ob.id}>{`Name: ${ob.name}`}</li> 
                <li key={ob.id + 1}>{`Phone: ${ob.phone}`}</li>
                </ul>
                </>
             ))
             }
        </div>
    )
}

export default ObjList
