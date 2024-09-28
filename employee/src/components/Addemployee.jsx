import { Button,TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'

const Addemployee = () => {
  var [inputs, setinputs] = useState({ Name: "", Age: "", dept:"", sal:"" })
  var navigate = useNavigate()
  const inputHandler = (e) => {
    setinputs({ ...inputs,[e.target.name]:e.target.value })
    console.log(inputs)
  }
  const AddHandler = () => {
      console.log("clicked")
    axios.post("http://localhost:3001/add",inputs)
        .then((response) => {
          alert(response.data.message)
          navigate('/B')
        })
    }

 
  return (
    <div align="center">
      <table >
      <TextField id="standard-basic"
        label="Employee name"
        variant="outlined"
        name="Name"
        value={inputs.Name}
        onChange={inputHandler}
      />
      <br /> <br />
      <TextField id="standard-basic"
        label="Age"
        variant="outlined"
        name="Age"
        value={inputs.Age}
        onChange={inputHandler}
      />
      <br /> <br />
      <TextField id="standard-basic"
        label="department"
        variant="outlined"
        name="dept"
        value={inputs.dept}
        onChange={inputHandler}
      />
      <br /> <br />
      <TextField id="standard-basic"
        label="salary"
        variant="outlined"
        name="sal"
        value={inputs.sal}
        onChange={inputHandler}
      />
      <br/><br/>
      <Button variant="contained"  onClick={AddHandler}>submit</Button>
      <br /> <br />
        <br /><br />
        </table>
    </div>
  )
}


export default Addemployee
