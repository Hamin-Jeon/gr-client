import React, {useState} from 'react'
import {Get, Post} from '../../../apis/test'
import {Button, CardBody, CardHeader, Col, Row, CardGroup} from 'reactstrap'
import {Calendar} from 'antd'
export const SignUp = () => {

  const [data,setData] = useState<any>([]);
  const getTest = async() => {
    let params = new URLSearchParams();
    params.append("name","전하민");
    params.append("phone","01066682620");
    params.append("age","31");
    
    const result = await Get('/test',{params})
      setData(result.data);
      console.log(result.data);
  }
  return (
    <>
      <div>Login</div>
      
      <Button onClick={()=>getTest()} color="primary">get Info</Button>
      <CardGroup>
        <CardHeader>
          <div></div>
        </CardHeader>
        <CardBody>
          <Calendar></Calendar>
        </CardBody>
      </CardGroup>
      
    </>
    
  )
}
