import{
  Navbar,
  Nav,
  NavItem,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice";
import axios from "axios";


const Header = () => {
const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    dispatch(logout());
        await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/"); //redirect to login page route.
  };


  return (
    <>
    <Navbar className="header">
      <Nav>
        <NavItem >
          <Link><img src={logo} className="logo"/>
          </Link></NavItem>

        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>

        <NavItem>
          <Link to="/">Profile</Link>
        </NavItem>

        <NavItem>
         <Link onClick={handlelogout}>Logout</Link>
        </NavItem>
      </Nav>
    </Navbar>
    </>


  );
};

export default Header;
