import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import styles from "./DeliveryTable.module.css";
import SearchBar from "material-ui-search-bar";
import useSWR from "swr";
import FormData from "form-data";
import PrintIcon from "@material-ui/icons/Print";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AdjustIcon from "@material-ui/icons/Adjust";
import RoomIcon from "@material-ui/icons/Room";
import CancelIcon from "@material-ui/icons/Cancel";
import BookedShipmentModal from "../BookedShipmentModal/BookedShipmentModal";
import TrackDetailModal from "../TrackDetailModal/TrackDetailModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function createData(cn, ship, cod, weight, pieces, fromTo, status, act) {
  return { cn, ship, cod, weight, pieces, fromTo, status, act };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "cn", numeric: false, disablePadding: false, label: "CN#" },
  { id: "ship", numeric: true, disablePadding: false, label: "Ship Date" },
  { id: "cod", numeric: true, disablePadding: false, label: "COD" },
  { id: "weight", numeric: true, disablePadding: false, label: "Weight" },
  { id: "pieces", numeric: true, disablePadding: false, label: "Pieces" },
  { id: "fromTo", numeric: true, disablePadding: false, label: "From To" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "act", numeric: true, disablePadding: false, label: "Action" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{background: "#d2d6e4"}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        // <Tooltip title="Filter list">
        //   <IconButton aria-label="filter list">
        //     {/* <FilterListIcon /> */}
        //   </IconButton>
        // </Tooltip>
        <></>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const url = `http://benefitx.blue-ex.com/api/customerportal/deliveries.php`;

  var formdata = new FormData();
  formdata.append(
    "request",
    '{"acno": "KHI-04324", "startdate": "2021/03/01", "enddate": "2021/03/10", "status": "All"}'
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  // const { data, error } = useSWR(url, getData);
  const [loadTable, setLoadTable] = useState(false);
  const [data, setData] = useState(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(
      "http://benefitx.blue-ex.com/api/customerportal/deliveries.php",
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
          data[i].CNNO,
          data[i].CN_DATE,
          data[i].PROD_VALUE,
          `${data[i].WGT} Kg`,
          data[i].PCS,
          `${data[i].ORIG_CITY} - ${data[i].DEST_CITY}`,
          data[i].STAT_MSG,
          "ld"
        );
        newRows.push(ro);
      }
      setRows(newRows);
      console.log(newRows);
    }
  }, [data]);

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [originalRows, setOriginalRows] = React.useState(rows);
  const [searched, setSearched] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [modalId, setModalId] = React.useState();
  const [status, setStatus] = React.useState([]);
  const [bookedModal, setBookedModal] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    console.log("Selected = ", selected);
  }, [selected]);
  useEffect(() => {
    setOriginalRows(rows);
  }, [rows]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.cn);
      const newStatuses = rows.map((n) => n.status);
      setSelected(newSelecteds);
      setStatus(newStatuses);
      return;
    }
    setSelected([]);
    setStatus([]);
  };

  const handleClick = (event, name, astatus) => {
    const selectedIndex = selected.indexOf(name);
    const statusIndex = status.indexOf(status);
    let newSelected = [];
    let newStatus = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      newStatus = newStatus.concat(status, astatus);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newStatus = newStatus.concat(status.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newStatus = newStatus.concat(status.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
      newStatus = newStatus.concat(
        status.slice(0, selectedIndex),
        status.slice(selectedIndex + 1)
      );
    }
    if (selected == []) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }

    setSelected(newSelected);
    setStatus(newStatus);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.cn.toLowerCase().includes(searchedVal.toLowerCase());
    });
    console.log(filteredRows);
    setOriginalRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, originalRows.length - page * rowsPerPage);

  const handlePickupBox = (id) => {
    const box = document.querySelector("#" + id);
    box.style.display === "none"
      ? (box.style.display = "block")
      : (box.style.display = "none");
  };

  const createPickup = () => {
    let booked = false;
    status.forEach((s) => {
      if (s !== "Booked") booked = true;
    });

    if (booked) setBookedModal(true);
    else {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        icon: "warning",
        title: "WARNING:",
        text: "Are you sure you want to Pickup this Shipment?",
        showCancelButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let cnd = selected.map((s) => `{"cnno":"${s}"}`);
          var formdata = new FormData();
          formdata.append(
            "request",
            `{"acno":"KHI-00114","usrid":"foc","cndetail":[${selected.map(
              (s) => `{"cnno":"${s}"},`
            )}]}\n\n\n`
          );

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
          };

          fetch(
            "http://benefitx.blue-ex.com/api/customerportal/createloadsheet.php",
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              MySwal.fire({
                title: "Success",
                text:
                  "New Pickup Sheet is Successfully Created Click here to View",
              });
            })
            .catch((error) => {
              MySwal.fire({
                title: "Danger",
                text: "Something went wrong",
              });
            });
        } else if (result.isDenied) {
          // Swal.fire({
          //   title: 'Success',
          //   text: 'New Pickup Sheet is Successfully Created Click here to View',
          // });
        }
      });
    }
  };

  return (
    <div className={classes.root}>
      {originalRows !== [] && (
        <Paper className={classes.paper}>
          {showButton && (
            <div className={styles.buttonList}>
              <button onClick={createPickup}>CREATE A PICKUP</button>
              <button>CANCEL SHIPMENTS</button>
              <button>PRINT SHIPMENTS</button>
            </div>
          )}
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
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead 
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                
              />
              <TableBody>
                {stableSort(originalRows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.cn);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.cn}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={(event) =>
                              handleClick(event, row.cn, row.status)
                            }
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.cn}
                        </TableCell>
                        <TableCell align="right">{row.ship}</TableCell>
                        <TableCell align="right">{row.cod}</TableCell>
                        <TableCell align="right">{row.weight}</TableCell>
                        <TableCell align="right">{row.pieces}</TableCell>
                        <TableCell align="right">{row.fromTo}</TableCell>
                        <TableCell align="right"><span 
                        style= {{
                          borderRadius:"30px" ,
                          backgroundColor:"#0047ba",
                          color:"white",
                          padding:"5px",
                          width:"112px",
                          fontSize:"12px",
                          cursor:"pointer",
                          textAlign:"center",
                          display:"flex",
                          justifyContent:"center",
                          alignItem:"center",
                          flexWrap:"nowrap"
                        }}>
                          {row.status}</span></TableCell>
                        <TableCell
                          align="right"
                          style={{ position: "relative" }}
                        >
                          <MoreHorizIcon
                            fontSize="small"
                            className={styles.cellIcon}
                            onClick={() => handlePickupBox(`id${row.cn}`)}
                          />
                          <AdjustIcon
                            fontSize="small"
                            className={styles.cellIcon}
                            onClick={() => {
                              setModalId(row.cn);
                              setModalShow(true);
                            }}
                          />
                          <PrintIcon
                            fontSize="small"
                            className={styles.cellIcon}
                          />
                          <div
                            className={styles.pickupBox}
                            style={{ display: "none" }}
                            id={`id${row.cn}`}
                          >
                            <ul>
                              <li>
                                <RoomIcon /> Create a Pickup
                              </li>
                              <li>
                                <CancelIcon /> Cancel
                              </li>
                            </ul>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <TrackDetailModal
            cn={modalId}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <BookedShipmentModal
            show={bookedModal}
            onHide={() => setBookedModal(false)}
          />
        </Paper>
      )}
    </div>
  );
}
