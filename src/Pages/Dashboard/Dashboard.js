import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  console.log(email);
  const { data: usersInfo = {}, isLoading } = useQuery({
    queryKey: ["usersInfo"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users/${email}`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      Dash board{usersInfo?.name}
      <div></div>
    </div>
  );
};

export default Dashboard;
