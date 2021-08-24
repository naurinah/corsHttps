import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(serviceCode, sector, weight, price, addWeight, addPrice, cnCharges) {
  return { serviceCode, sector, weight, price, addWeight, addPrice, cnCharges };
}

const rows = [
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
  createData('BLUE EDGE(BE)', 'Other Cities(OC)', '0 - 0.5', 170, 0, 0, 0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CodTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Service Code</StyledTableCell>
            <StyledTableCell align="right">Sector</StyledTableCell>
            <StyledTableCell align="right">Weight&nbsp;(KG)</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(PKR)</StyledTableCell>
            <StyledTableCell align="right">Add Weight&nbsp;(KG)</StyledTableCell>
            <StyledTableCell align="right">Add Price&nbsp;(PKR)</StyledTableCell>
            <StyledTableCell align="right">CN Charges&nbsp;(PKR)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.serviceCode}>
              <StyledTableCell component="th" scope="row">
                {row.serviceCode}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sector}</StyledTableCell>
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.addWeight}</StyledTableCell>
              <StyledTableCell align="right">{row.addPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.cnCharges}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
