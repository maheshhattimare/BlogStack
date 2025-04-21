import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
            setLoading(false);
          } else {
            setError("Post not found!");
            setLoading(false);
            navigate("/");
          }
        })
        .catch((err) => {
          setError("Failed to load post. Please try again later.");
          setLoading(false);
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (post) {
      if (window.confirm("Are you sure you want to delete this post?")) {
        appwriteService
          .deletePost(post.$id)
          .then((status) => {
            if (status) {
              appwriteService.deleteFile(post.featuredImage);
              navigate("/");
            }
          })
          .catch((err) => {
            setError("Failed to delete post. Please try again later.");
          });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          {post.featuredImage ? (
            <img
              src={appwriteService.getFileView(post.featuredImage)}
              alt={post.title}
              className="rounded-xl max-h-[500px] object-contain"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-xl">
              <p>No Image Available</p>
            </div>
          )}

          {isAuthor && (
            <>
              <div className="absolute right-6 top-6 flex gap-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button className="mr-2 bg-green-500">Edit</Button>
                </Link>
                <Button className="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  );
}
