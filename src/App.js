import "./App.css";
import { useState } from "react";
import { styled, CircularProgress } from "@mui/material";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const Page = styled("div")`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  height: 100vh;
  width: 100vw;
`;

const UserCards = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  height: 85vh;
  width: 82vw;
  padding: 1vh 8vw;
`;

const Loading = styled(CircularProgress)`
  position: absolute;
  color: purple;
  top: 45%;
  left: 45%;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Page>
      <Navbar
        setUsers={setUsers}
        setVisibility={setVisibility}
        setLoading={setLoading}
      />

      {visibility && (
        <UserCards>
          {users.map((user, index) => (
            <Users users={user} key={index} />
          ))}
        </UserCards>
      )}

      {loading && <Loading size={90} />}
    </Page>
  );
}

export default App;
