import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { updateUserProfile } from "../Features/UserSlice";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from './User'; 


const Profile = () => {
  const user = useSelector((state) => state.users.user);

  const [userName, setUserName] = useState(user.name);
  const [pwd, setPwd] = useState(user.password);
  const [confirmPassword, setConfirmPassword] = useState(user.password);
  const [profilePic, setProfilePic] = useState(user.profilePic);

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    const userData = {
      email: user.email, // Retrieve email from the Redux store
      name: userName, // Get the updated name from the state variable
      password: pwd, 
            profilePic: profilePic,
    };
    console.log(userData);
        dispatch(updateUserProfile(userData));
    alert("Profile Updated.");
    // Navigate back to the profile page after the update is completed
    navigate("/profile");
  };




  return (
    <Container fluid>
      <h1>Profile</h1>
      <Row>
        <Col md={2}>
          <User />
        </Col>
        <Col md={4}>Update Profile
        <Form Form onSubmit={handleUpdate}>
            <input type="file" name="profilePic" />
            <div className="appTitle"></div>
            Update Profile
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" placeholder="Name..." type="text"
                              value={userName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                              id="email"
                name="email"
                placeholder="Email..."
                type="email"
                value={userName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password..."
                type="password"
                value={userName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword "
                name="confirmPassword"
                placeholder="Confirm Password..."
                type="password"
                value={userName}
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" className="button">
                Update Profile
              </Button>
            </FormGroup>
          </Form>

        </Col>

      </Row>
    </Container>

  );
};

export default Profile;
