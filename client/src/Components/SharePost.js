import{
  Button,
  Col,
  Container,
  Row,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

import{useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const [postMsg,setpostMsg]= useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.users.user.email) 

  const handlePost = async () => {
   
    if (!postMsg.trim()) {
      alert("Post message is required."); 
      return; 
    }

    const postData = {
      postMsg: postMsg,
      email: email,
    };

    dispatch(savePost(postData)); 
setpostMsg(""); 

  };

  return (
    <Container>
      <Row>

        <Form>
          <FormGroup>
        <Input
        id="share"
        name="share"
        placeholder="share your thoughts..."
        type="textarea"
        value={postMsg}
        onChange={(e)=>setpostMsg(e.target.value)} />
        <Button onClick={()=>handlePost()}>PostIT</Button>
        </FormGroup>
        </Form>
       </Row>
    </Container>
  );
};

export default SharePosts;
