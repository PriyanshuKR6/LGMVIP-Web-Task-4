import axios from "axios";

const API = "https://reqres.in/api/users?page=1";

export const getUsers = async (setUsers) => {
  try {
    const response = await axios.get(API);
    const {data} = response;
    setUsers(data.data);
  } catch (err) {
    console.log(err);
  }
};


