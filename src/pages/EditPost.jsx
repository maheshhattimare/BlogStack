import React, { useEffect, useState } from "react";
import { Container, PostForm, Loader } from "../components"; // Added Loader for loading state
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      // Fetch post by slug
      appwriteService
        .getPost(slug)
        .then((fetchedPost) => {
          if (fetchedPost) {
            setPost(fetchedPost); // Set the fetched post
          } else {
            navigate("/"); // Redirect if post not found
          }
        })
        .catch((error) => {
          console.error("Error fetching post:", error); // Error handling
          navigate("/"); // Redirect on error
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the API call
        });
    } else {
      navigate("/"); // Redirect if no slug
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="w-full py-8 text-center">
        <Container>
          <Loader /> {/* Show loader while data is being fetched */}
        </Container>
      </div>
    );
  }

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} /> {/* Pass the post data to PostForm */}
      </Container>
    </div>
  ) : (
    <div className="w-full py-8 text-center">
      <Container>
        <h1 className="text-2xl font-bold text-gray-500">
          Post not found! Redirecting...
        </h1>
      </Container>
    </div>
  );
}

export default EditPost;
