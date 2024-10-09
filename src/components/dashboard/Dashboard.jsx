import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);
  let getData = async () => {
    try {
      const userResp = await axios.get("https://restuarant-reservation-backend-1.onrender.com/people/", {
        headers: {
          Authorization: window.localStorage.getItem("mytoken"),
        },
      });
      setUsers(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let deleteUser = async (id) => {
    let yesno = confirm("Are you sure do you want to delete this user?");
    if (yesno) {
      await axios.delete(`https://restuarant-reservation-backend-1.onrender.com/people/delete-people//${id}`, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken"),
        },
      });
      getData();
    }
  };
  return (
    
    <>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <img
        className="h-full w-full lowbrightness object-cover z-[-1] fixed top-0"
        src="https://wallpaperaccess.com/full/3353916.jpg"
        alt=""
      />
      <div className="text-white text-center w-5/6">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Restuarant Users
        </h1>
</div>
   <div className="p-8">
  <table className="table-auto">
    <thead>
      <tr>
        <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">s.no</th>
        <th className="font-bold p-2 border-b border-l text-left border-indigo-700 bg-indigo-700 text-white">name</th>
      </tr>
    </thead>
    <tbody>
    {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">{index + 1}</td>
                    <td className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">{user.email}</td>
                  </tr>
                );
              })}
              </tbody>
  </table>
</div>
</div>
    
    </>
  )
}

export default Dashboard