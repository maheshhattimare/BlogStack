import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-6">Add New Post</h1>{" "}
        {/* Added page title */}
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
