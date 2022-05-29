import React, {useState} from 'react'
import {Get,Post} from '../apis/test'
import {useLocation } from 'react-router-dom'
import {Button } from 'reactstrap'
import {Table} from 'antd'
import type { ColumnsType } from 'antd/lib/table';
import { getJSDocDeprecatedTag } from 'typescript'
import { Http2ServerResponse } from 'http2'


export const Test = () => {
	const [data, setData] = useState<any>();
	const [dataColumns, setDataColumns] = useState<any>();
	const resultCheck = (result:any) => {
		if(result.status!==200){
			alert('error');
			return false
		}
		return true
	} 
	let location = useLocation ();
	type DataType = {
		name:string;
		phone:string;
		age:string;
	}
	const getData  = async() => {
		let params = new URLSearchParams();
		params.append('name',"전하민");
		params.append('phone',"01066682620");
		params.append('age',"31");

		const result = await Get('/test',{params})
		if(resultCheck(result)){
			setData([result.data]);
			const columns: ColumnsType<DataType> = [
				{
					title:'Name',
					dataIndex:'name',
					key:'name'
				},
				{
					title:'Phone',
					dataIndex:'phone',
					key:'phone'
				}
			]

			setDataColumns(columns);
		}
		
	}

	return (
		<>
			<Button onClick = {() => console.log(location)}>location</Button>
			<Button onClick={()=> getData()}>getData</Button>

			<Table dataSource={data} columns={dataColumns} />;
		</>


	)
}




