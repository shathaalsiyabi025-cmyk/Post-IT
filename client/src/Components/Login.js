import{
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from"../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setemail] = useState(); 
  const [password, setpassword] = useState();

  const dispatch=useDispatch();
  const navigate = useNavigate();


  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);

const handleLogin=()=>{
try {
    const userData = {
        email: email,
        password: password,
      };
    
  
  dispatch(login(userData))
} catch (error) {
  alert(error)
}
};



  return (
    <div>
      <Container>
<Form>
<Row>
<Col md={3}>
<img src={logo}/>
</Col>
</Row>
<Row>
  <Col md={3}>
  <FormGroup>
    <Label for="email">
      Email
      </Label>
      <Input 
      id="email"
      name="email"
      placeholder="Enter email..."
      type="email"
      onChange={(e)=>setemail(e.target.value)}
      />
      </FormGroup></Col>
</Row>
</Form>
<Row>
  <Col md={3}>
  <FormGroup>
    <Label for="password">
      password
      </Label>
      <Input 
      id="password"
      name="password"
      placeholder="Enter password..."
      type="password"
      onChange={(e)=>setpassword(e.target.value)}
      />
      </FormGroup></Col>
</Row>

    <Button
       color="primary"
       className="button"
       onClick={() => handleLogin()}>
                Sign in
    </Button>
  
  <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
</Container>
</div>
  );
};

export default Login;
