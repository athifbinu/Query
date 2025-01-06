// eslint-disable-next-line no-unused-vars
import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const App = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const responsice = await axios("http://localhost:3000/users");

      return responsice.data;
    },
  });

  console.log("user data=", data);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default App;
