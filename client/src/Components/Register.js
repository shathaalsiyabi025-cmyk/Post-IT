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
import { userSchemaValidation } from "../Validations/UserValidations.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import{useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import{addUser,deleteUser,udpateUser} from "../Features/UserSlice";
import { Link } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const userList=useSelector((state)=>state.users.value);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confirmPassword,setconfirmPassword]=useState("");

    const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), 
  });
  // Handle Delete
const handleDelete=(email)=>{
  dispatch(deleteUser(email));
}
    // Handle form submission
    const onSubmit = (data) => {
      try{
        const UserData={
          name:data.name,
          email:data.email,
          password:data.password,
        };
        console.log("Form Data",data);
        alert("Validation all good");
        dispatch(registerUser(UserData));
        navigate("/login");

      console.log("Form Data", data);
      alert("Validation all good.");
      }
      catch(error){
        console.log("Error occures");
      }
     };

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
        {/* Excute first the submitForm funtion and if validation is good excute the handlesumbit function*/}
        <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="appTitle"></div>
          <section className="form">
            <div className="form-group">
              <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name....."
              {...register("name",{
                onChange:(e)=> setname(e.target.value),
              })} //(e)=> event say...
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div className="form-group">
              <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email....."
              {...register("email",{
                onChange:(e)=> setemail(e.target.value),
              })} 
              />
              <p className="error">{errors.email?.message}</p>
            </div>
             <div className="form-group">
              <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password....."
              {...register("password",{
                onChange:(e)=> setpassword(e.target.value),
              })} 
              />
              <p className="error">{errors.password?.message}</p>
            </div>

            <div className="form-group">
              <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter the confirm password....."
              {...register("confirmPassword",{
                onChange:(e)=> setconfirmPassword(e.target.value),
              })} 
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </div>
            <Button type= "submit" color="primary" className="button">
              Register
            </Button>
          </section>
        </form>
        </Col>
        <Col className="columndiv2" lg="6"></Col>
      </Row>
      <Row>
        <Col md={6}>
        <h2>List of Users</h2>
       {/* <table>
          <tr>
            <th>Name</th>
            <th>E_mail</th>
            <th>Password</th>
          </tr>
            {userList.map((user)=>(
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Button onClick={()=>
                  handleDelete(user.email)}>
                    Delete Users
                    </Button>
                </td>
                <td>
                  <Link to={`/update/${user.email}/${user.name}/${user.password}`}>
                  <Button>Update Users</Button>
                  </Link>
                </td>
              </tr>
            ))}
        </table>*/}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
