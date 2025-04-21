import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard, Loader } from "../components"; // <-- import Loader

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      })
      .catch((err) => {
        setError("Failed to load posts. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <Loader /> {/* <-- show Loader here instead of 'Loading posts...' */}
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold text-red-500">{error}</h1>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold hover:text-gray-500">
            No posts found. Login or create a new post!
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
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
