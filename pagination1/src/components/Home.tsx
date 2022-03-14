import React, { useEffect, useState } from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useDispatch , useSelector} from 'react-redux';
import {getRawJson, getTableData} from '../redux/HomeActions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const navigate = useNavigate();
    let page = 0
    const [arr, setArr] = useState([])
    const dispatch = useDispatch();
    type stateType = {
        data:any
        rawJson:any
}
    const data = useSelector((state:stateType)=>{
        return state.data
    })
    console.log(data , "data");
    let nbPages:any;
    const getData = async()=>{
        console.log(page);
        const res =  await axios.get(` https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
        nbPages = res.data.nbPages
        page = page + 1
        dispatch(getTableData(res.data.hits))
    }
    useEffect(() => {
        getData();
        let interval = setInterval(()=>{
         getData();
         if (page === nbPages - 1) {
             clearInterval(interval)
         }
        } , 10000)

       }, [])
       const handleChange = (event: React.ChangeEvent<unknown>, page: number)=>{
        setPageNumber(page)
       }
       const handleClick = (item:any)=>{
dispatch(getRawJson(item))
navigate("/rawjson")

       }
    return (
        <>
        <h2>Data Table</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">URL</TableCell>
                <TableCell align="center">Created_at</TableCell>
                <TableCell align="center">Author</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.slice(pageNumber*20 , pageNumber*20+20).map((item:any) => (
                <TableRow
                  key={Math.random()}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick = {()=>handleClick(item)}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.url}</TableCell>
                  <TableCell align="center">{item.created_at}</TableCell>
                  <TableCell align="center">{item.author}</TableCell>
                  
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Pagination count={data ? data.length/20 : 1} color= "primary" variant="outlined" shape="rounded" onChange={(e , page)=>handleChange(e,page)}/>

      </>
      );
}

export default Home




