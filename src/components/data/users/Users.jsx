import React, { useContext, useEffect, useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { editUsers, deleteUsers, listUsers } from "../../redux/users/usersAction";
import AddUser from "./modal/AddUser";
import EditUser from "./modal/EditUser";
import { url } from "../../../utils/http";
import DeleteConfirmation from "./modal/DeleteConfirmation";



function Users() {
  // const { users } = useContext(dataContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const headCells = ["Index", "Name", "Email", "Gender", "Status", "Actions"];

  const [user, setUser] = useState('');
  const [id, setId] = useState('');


  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = (id) => {
    setId(id)
    setOpenDelete(true)
  };

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (user) => {
    setUser(user)
    setOpenEdit(true)
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.users);

  useEffect(() =>{
    dispatch(listUsers())

  },[])

  const btnDelete = async (id) => {
    console.log(id)
    try {
      url.delete(`/users/${id}`, {
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': 'Bearer 4d53d40da1b60e5a2ce2b7369afa1b9593e7923a8e78fce0cda10c6a7d6bc7d9'
        }     

    })
      console.log('OK')
    } catch (error) {
      console.log(error)

    }

  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container fixed>
      <AddUser open={openCreate} handleClose={handleCloseCreate}/>
      <EditUser open={openEdit} handleClose={handleCloseEdit}  user={user}/>
      <DeleteConfirmation open={openDelete} handleClose={handleCloseDelete}  id={id}/>

      <div>breadcrumbs</div>
      <div className="page__header">
      <Typography id="transition-modal-title" variant="h4" component="h2">
              Users
            </Typography>
        <div>
          <Button variant="contained" size="medium" color="secondary" onClick={() => handleOpenCreate()}>
            Add data
          </Button>
        </div>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              {headCells.map((headCell, index) => (
                <TableCell key={index}>{headCell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { (data.length === undefined) ? <div> No data </div> : (
              data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((user, index) => {
                return (
                  <TableRow key={user.name}>
                    <TableCell id={user.id} scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.gender}</TableCell>
                    <TableCell align="left">{user.status}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        sx={{ mx: 1 }}
                        onClick={() => handleOpenEdit(user)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        sx={{ mx: 1 }}
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default Users;
