import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const UserCard = styled(Card)(({ background }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "20vh",
  width: "22vw",
  boxShadow:"3px 3px 2px rgba(0,0,0,0.2)",
  padding: "20px 30px",
  borderRadius: "7px",
  background: `${background}`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const UserCardMedia = styled(CardMedia)`
  height: 125px;
  width: 125px;
  border-radius: 50%;
  border: none;
`;

const UserCardContent = styled(CardContent)`
  text-align: center;

`;

const TextContent = styled(Typography)`
  color: #fff;
  font-size:1.2rem;
`;

const Users = ({ users }) => {
  const [randomColor, setRandomColor] = useState("#000000");

  const generateRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColor(color);
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <UserCard
      style={{
        background: `${randomColor}`,
      }}
    >
      <UserCardMedia component="img" image={users.avatar} />

      <UserCardContent>
        <TextContent>
          {users.first_name} {users.last_name}
        </TextContent>
        <TextContent>{users.email}</TextContent>
      </UserCardContent>
    </UserCard>
  );
};

export default Users;
