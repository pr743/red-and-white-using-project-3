import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    fetch("http://localhost:9000/employees")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    await fetch(`http://localhost:9000/employees/${id}`, {
      method: "DELETE",
    });

    loadData();
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="table-container bg-white p-6 rounded-2xl shadow-2xl w-full max-w-6xl">
          <h1 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text animate-fadeSlide">
            Employee Details
          </h1>

           <div className=" mb-4 mt-5 text-center">
             <button
                      onClick={() => navigate("/add")}
                      className="bg-green-600 text-white px-3 py-1  rounded-lg shadow hover:bg-green-700 transition"
                    >
                      Add NEW employees
            </button>
           </div>

          <table className="w-full border-collapse overflow-hidden rounded-2xl shadow-xl">
            <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white animate-headerGradient">
              <tr>
                <th className="px-2 py-3">EmployeeId</th>
                <th className="px-2 py-3">FullName</th>
                <th className="px-2 py-3">Email</th>
                <th className="px-2 py-3">Phone</th>
                <th className="px-2 py-3">Address</th>
                <th className="px-2 py-3">Department</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <tr
                  key={u.id}
                  className="table-row border-b animate-fadeSlide rainbow-row hover-row-glow"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <td className="px-3 py-3">{u.employeeId}</td>
                  <td className="px-3 py-3">{u.fullName}</td>
                  <td className="px-3 py-3">{u.email}</td>
                  <td className="px-3 py-3">{u.phone}</td>
                  <td className="px-3 py-3">{u.address}</td>
                  <td className="px-3 py-3">{u.department}</td>

                  <td className="flex gap-2 px-4 py-3">

                    <button
                      onClick={() => navigate(`/sever/${u.id}`)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(u.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => navigate(`/view/${u.id}`)}
                      className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-800 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
