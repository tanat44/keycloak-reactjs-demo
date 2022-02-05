import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RequireRoles = ({ roles, children}) => (
    UserService.hasRole(roles) ? children : <NotAllowed/>
)

export default RequireRoles
