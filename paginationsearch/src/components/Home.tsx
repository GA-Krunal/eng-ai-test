import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useDispatch , useSelector} from 'react-redux';
import {getTableData} from '../redux/HomeActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1600,
  height:200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const [rowData, setRowData] = useState("")
    const [term, setTerm] = useState("")
    let page = 0
    const dispatch = useDispatch();
    type stateType = {
        data:any
        rawJson:any
}
    const data = useSelector((state:stateType)=>{
        return state.data
    })
    console.log(data , "data");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
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
        setRowData(JSON.stringify(item))
        setOpen(true)
       }
       const handleTermChange = (e:any)=>{
         console.log(e.target.value);
        setTerm(e.target.value)
       }
    return (
        <>
        <h2>Data Table</h2>
        <TextField id="filled-basic" label="Search by Title and created at" variant="filled"onChange={handleTermChange}  />
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
              {data?.slice(pageNumber*20 , pageNumber*20+20).filter((elem:any)=> elem.title.includes(term) || elem.created_at.includes(term)).map((item:any) => (
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
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Raw Json Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {rowData}
          </Typography>
        </Box>
      </Modal>
    </div>
      </>
      );
}

export default Home




