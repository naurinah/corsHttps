export const initialState = {
    sidebarDisplay: 'block',
    isLoggedin: false,
    acno: '',
    b_usrId: '',
    name: '',
    acc_type: '',
    statement: {},
    
  };
  
  export const actionTypes = {
    SET_DISPLAY: "SET_DISPLAY",
    SET_DETAILS: "SET_DETAILS",
    SET_STATEMENT: "SET_STATEMENT",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_DISPLAY:
        return { ...state, sidebarDisplay: action.term };
      case actionTypes.SET_DETAILS:
        return { ...state, acno: action.acno, b_usrId: action.b_usrId, name: action.name, acc_type: action.type };
      case actionTypes.SET_STATEMENT:
        return { ...state, statement: action.statement };
      default:
        return state;
    }
  };
  
  export default reducer;