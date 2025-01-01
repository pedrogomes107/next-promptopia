"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const projectId = useParams();

  // const [projectId, setProjectId] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  // useEffect(() => {
  //   const getId = async () => {
  //     const paramId = await params?.id;
  //     setProjectId(paramId);
  //   };
  //   getId();
  // }, [params]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${projectId.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (projectId.id) fetchPosts();
  }, [projectId.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
