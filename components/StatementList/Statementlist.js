import styles from "./Statements.module.css"
import ResposiveTable from "../../components/ResposiveTable/ResponsiveTable"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchBar from "material-ui-search-bar";
import { useEffect, useState } from "react";
import useSWR from 'swr'
import { useCookies } from "react-cookie"

const dateChanger = (date) => {
    let d = date.split("-");
    var month = [ "0", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return `${d[0]}-${month[+d[1]]}`
}
const dateFormat = (date) => {
    let d = date.split("-");
    var month = [ "0", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return `${d[0]}-${month[+d[1]]}-${d[2]}`
}


const columns = [
    { id: 'ref', label: 'Ref. No', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
      id: 'period',
      label: 'Period',
      minWidth: 100,
      
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'cod',
      label: 'COD',
      minWidth: 100,
      
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'print',
      label: 'Print Statement',
      minWidth: 170,
   
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(ref, date, period, cod, print) {
    return { ref, date, period, cod, print };
  }
  
  const originalRows = [ ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

const StatementList = () => {
    const ac = "KHI-06366"
    
    const url =  `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=${ac}&hashkey=KaPdSgVkYp3s6v9y`;
    const getData = async () => {
        const response = await fetch(url);
        return await response.json()
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()

    };
    const { data, error } = useSWR(url, getData)
    const [loadTable, setLoadTable] = useState(false);
    
    useEffect(()=>{
        if (data !== undefined) {
            data.map((d)=>{
                originalRows.push(createData(d.FPS_CODE, dateFormat(d.DATE), dateChanger(d.SDATE) + " to " + dateChanger(d.EDATE), d.CODAMOUNT , <><img src="/acrobat.svg" width="16px" /> <img src="/file.svg" width="16px" /></>))
            })
            setLoadTable(true);
        }
    }, [data])
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState(originalRows);
   
    
    const [searched, setSearched] = useState("");

    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
            return row.ref.toLowerCase().includes(searchedVal.toLowerCase());
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

    return ( 
        <div className={styles.StatementList}>
            <div className={styles.top}>
                <h2>STATEMENT LIST</h2>
            </div>
            <div className={styles.shipment}>
                
                {loadTable && <div className={styles.table}>
                    <Paper className={classes.root}>
                        <div className={styles.search}>
                            <SearchBar
                                className={styles.searchBar}
                                value={searched}
                                onChange={(searchVal) => requestSearch(searchVal)}
                                onCancelSearch={() => cancelSearch()}
                            />
                            <div className={styles.right}>
                                        <button>Copy</button>
                                        <button>Excel</button>
                                        <button>CSV</button>
                                    </div>
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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
                    </Paper>
                </div>
                
                }
            </div>
        </div>
     );
}
 
export default StatementList;