import React, {useEffect, useState } from "react";
import {
  Button,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination, Typography
} from "@mui/material";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import EditIcon  from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {listUsers } from "../../redux/users/usersAction";
import AddUser from "./modal/AddUser";
import EditUser from "./modal/EditUser";
import DeleteConfirmation from "./modal/DeleteConfirmation";
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

function Users() {

  const useStyles = makeStyles({
    padding: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    active: {
      border: '1px solid green',
    },
    inactive: {
      border: '1px solid red',
    }

  });

  const classes = useStyles();

  //display
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const headCells = ["Index", "Name", "Email", "Gender", "Status", "Actions"];

  //transmit
  const [user, setUser] = useState('');
  const [id, setId] = useState('');

  //create modal
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  //delete modal
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = (id) => {
    setId(id)
    setOpenDelete(true)
  };

  //update modal
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpenUpdate = (user) => {
    setUser(user)
    setOpenUpdate(true)
  };

// get data
const data = useSelector((state) => state.users);

const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(listUsers())

  },[])

  //pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <div  style={{marginTop: '80px', backgroundColor: '#9C27B0', width: '100%'}}>
    <Container >
    <div className="page__header">
    <Typography id="transition-modal-title" variant="h4" component="h2">
            Users
          </Typography>
      <div>
        <Button  variant="outlined" size="medium" color="secondary" onClick={() => handleOpenCreate()} style={{backgroundColor: '#fff'}}>
          <AddIcon/>
        </Button>
      </div>
    </div>
    </Container>
    </div>
    <Container fixed className={classes.padding} style={{padding: 0}}>
      <AddUser open={openCreate} handleClose={handleCloseCreate}/>
      <EditUser open={openUpdate} handleClose={handleCloseUpdate}  user={user}/>
      <DeleteConfirmation open={openDelete} handleClose={handleCloseDelete}  id={id}/>

      <TableContainer >
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              {headCells.map((headCell, index) => (
                <TableCell key={index} style={{fontWeight: 600, textTransform: "uppercase", textAlign: "center"}}>{headCell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { ( data && data.length === undefined) ? <div> No data </div> : (
              data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((user, index) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell id={user.id} scope="row"  align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.gender}</TableCell>
                    <TableCell align="center" >
                      <Typography className={user.status === 'active' ? classes.active : classes.inactive}>{user.status}</Typography>
                      
                      </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        sx={{ mx: 1, my: 1}}
                        onClick={() => handleOpenUpdate(user)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        sx={{ mx: 1, my: 1 }}
                        onClick={() => handleOpenDelete(user.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length ? data.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
    </>
  );
}

export default Users;
