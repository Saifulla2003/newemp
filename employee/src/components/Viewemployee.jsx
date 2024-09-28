import { Table, TableCell, TableHead, TableRow ,Button} from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Viewemployee = () => {
  var [user, setuser] = useState([])
  const [error, seterror] = useState(null);
  axios.get("http://localhost:3001/view")
      .then((response) => {
          console.log(response.data)
          setuser(response.data)
      })
  const delvalue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3001/delete/"+ id)
      .then((response) => {
        console.log(response.data)
        window.location.reload()
    })
 }
return (
    <div>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Employee name</TableCell>
                <TableCell>Employee Age</TableCell>
                <TableCell>Department</TableCell>
                  <TableCell>salary</TableCell>
          
            </TableRow>
            </TableHead>
            {user.map((val,i) => {
                      return (
            <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.dept}</TableCell>
                <TableCell>{val.sal}</TableCell>
                <Button variant="contained" onClick={() => { delvalue(val._id) }}>delete</Button>
            </TableRow>
                      )  
            })
          }
      </Table>
    </div>
  )
}

export default Viewemployee
