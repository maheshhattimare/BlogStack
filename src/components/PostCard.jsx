import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="rounded-t-xl w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostCard;
