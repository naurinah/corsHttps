import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import styles from "./PickupListTable.module.css";
import FormData from "form-data";

const columns = [
  { id: "sheetNo", label: "Sheet No #", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "shipments",
    label: "Shipments",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "print",
    label: "Print\u00a0Load\u00a0Sheet",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "printCn",
    label: "Print\u00a0CNs",
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];

function createData(sheetNo, date, shipments, print, printCn) {
  return { sheetNo, date, shipments, print, printCn };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function PickupListTable() {
  const [originalRows, setOriginalRows] = React.useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(originalRows);
  const [searched, setSearched] = React.useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.sheetNo.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [data, setData] = React.useState(null);
  var formdata = new FormData();
  formdata.append("request", '{"acno":"KHI-00114"}');

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "http://benefitx.blue-ex.com/api/customerportal/getloadsheet.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));

    // setLoadTable(true);
  }, []);

  useEffect(() => {
    if (data !== null) {
      let newRows = [];
      for (let i = 0; i < data.length; i++) {
        let ro = createData(
          data[i].sheet_no,
          data[i].sheet_date,
          data[i].shipment,
          "Print",
          "Print CN"
        );
        newRows.push(ro);
      }
      setOriginalRows(newRows);
    }
  }, [data]);

  useEffect(() => {
    setRows(originalRows);
  }, [originalRows]);

  return (
    <Paper className={classes.root}>
      {originalRows !== [] && (
        <>
        {console.log(rows)}
          <div className={styles.search}>
            <SearchBar
              className={styles.searchBar}
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
            <div className={styles.right}></div>
          </div>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}
