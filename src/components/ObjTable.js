import React from 'react'

function ObjTable() {
    const tableData = [
        { id:1, name:"Ujjawal", phone:123, email:"ujjawalsharma@ameyo.com" },
        { id:2, name:"Yuvraj", phone:456, email:"yuvrajsingh@ameyo.com" },
        { id:3, name:"Gazala", phone:789, email:"gazalamalik@ameyo.com" },
        { id:4, name:"Tanuja", phone:258, email:"tanujasaini@ameyo.com" },
    ]
    return (
        <div style={{background:"#e0d1d5", width:"50%", padding:"2rem"}}>
        <h1>TABLE</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tableData.map((ob,index) => (
                        <>
                        <tr key={ob.id}>
                            <td>{index + 1}</td>
                            <td>{ob.name}</td>
                            <td>{ob.phone}</td>
                            <td>{ob.email}</td>
                        </tr>
                        </>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ObjTable
