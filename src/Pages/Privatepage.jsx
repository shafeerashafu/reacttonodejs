import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const Privatepage = ({page}) => {
    const isAuthenticated=Boolean(localStorage.getItem("isAuthenticated"));
    if(isAuthenticated){
        return page;
    }
  return <Navigate to="/login"/>
  
}

Privatepage.propTypes={
    page:PropTypes.element
}

export default Privatepage;

