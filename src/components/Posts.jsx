import React from "react";
// import { useEffect, useState } from "react";
// import { POST_URL } from "../constants/api.constants";
// import { getData } from "../services/axios.service"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Posts = ({posts}) => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     getData(POST_URL).then((resp) => setPosts(resp.data.posts));
//   });
  return (
    <div className="d-flex  justify-content-center flex-wrap">
      {posts.map((post) => {
        return <div key={post.id} className="m-3" style={{ width: '18rem' }}>
        <Card >
          <Card.Header as="h5">{post.title.length>15? post.title.slice(0, 15)+'...':post.title}</Card.Header>
          <Card.Body>
            <Card.Text>
             {post.body.length>50? post.body.slice(0, 50)+'...':post.body}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>;
       
      })}
    </div>
  );
};

export default Posts;
