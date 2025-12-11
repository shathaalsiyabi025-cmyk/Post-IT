import { useParams } from "react-router-dom";
import { userSchemaValidation } from "../Validations/UserValidations";
import { useDispatch } from "react-redux";
import { updateUser} from "../Features/UserSlice";
import { useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
function UpateUser()
{
const { user_email, user_name, user_password } = useParams();
  const [name, setname] = useState(user_name);
  const [email, setemail] = useState(user_email);
  const [password, setpassword] = useState(user_password);
  const [confirmPassword, setconfirmPassword] = useState(user_password);
const dispatch=useDispatch();
 const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), 
  });

const handleUpdate=()=>
{
    try{
        const userData = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(updateUser(userData)); 
    alert("Validation all good")
    }
    catch(error)
    {
        console.log(error);
    }
  }
    return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
        {/* Excute first the submitForm funtion and if validation is good excute the handlesumbit function*/}
        <form className="div-form" onSubmit={handleSubmit(handleUpdate)}>
          <div className="appTitle">

          </div>
          <section className="form">
            <div className="form-group">
              <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name....."
              value={name}
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
              value={password}
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
              value={confirmPassword}
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
        </Col>
      </Row>
    </Container>
    )

};
export default UpateUser;