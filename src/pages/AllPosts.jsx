import React, { useState, useEffect } from "react";
import { Container, PostCard, Loader } from "../components"; // Added Loader for loading state
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Fetching posts when component mounts
    appwriteService
      .getPosts()
      .then((response) => {
        if (response && response.documents) {
          setPosts(response.documents); // Set the fetched posts
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error); // Error handling
      })
      .finally(() => {
        setLoading(false); // Stop loading once data is fetched
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return (
      <div className="w-full py-8 text-center">
        <Container>
          <Loader /> {/* Show loader while data is being fetched */}
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <Container>
          <h1 className="text-2xl font-bold text-gray-500">
            No posts available! Create a new post.
          </h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} /> {/* Render PostCard for each post */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
