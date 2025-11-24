import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function View() {
  const { id } = useParams();
 const [users, setUsers] = useState([]);
 const navigate = useNavigate();



        useEffect(() => {
     fetch(`http://localhost:9000/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [id]);




  return (
   <div className="max-w-xl mx-auto mt-10 p-5 shadow-xl bg-white rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-800">
      Employee Details
      </h1>

      
      <div className="text-lg space-y-2">
        <p><b>EmployeeId:</b> {users.id}</p>
         <p><b>FullName:</b> {users.fullName}</p>
         <p><b>Email:</b> {users.email}</p>
          <p><b>Phone:</b> {users.phone}</p>
          <p><b>Address:</b> {users.address}</p>
          <p><b>Department:</b> {users.department}</p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-5 w-full bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
     Back
      </button>
    </div>
  );
}

export default View;
