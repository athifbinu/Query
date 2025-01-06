import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [showusers, setshowusers] = useState(false);

  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios("http://localhost:3000/users");
      return response.data;
    },
    // API call will only trigger when showusers is true
    enabled: showusers,
  });

  if (isSuccess) {
    console.log("user data=", data);
  }

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setshowusers(true)}>Get Users</button>
      {isError && <p>Error: {error.message}</p>}
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
