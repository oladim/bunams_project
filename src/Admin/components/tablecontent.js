import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';

function createData(name, department, status, email, group) {
  return { name, department, status, email, group };
}

const rows = [
  createData('Ogunrinu Abideen', 'New Horizons', 'Instructor', 'ogunrinuabideen@gmail.com', 'admin'),
  createData('Ogunrinu Abideen', 'New Horizons', 'Instructor', 'ogunrinuabideen@gmail.com', 'test'),
  createData('Ogunrinu Abideen', 'New Horizons', 'Instructor', 'ogunrinuabideen@gmail.com', 'user'),
  createData('Ogunrinu Abideen', 'New Horizons', 'Instructor', 'ogunrinuabideen@gmail.com', 'admin'),
  createData('Ogunrinu Abideen', 'New Horizons', 'Instructor', 'ogunrinuabideen@gmail.com', 'admin'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="heading">
            <TableCell>Action</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell><Checkbox style={{paddingLeft: "left"}}/></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.group}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}