// components/AdminProfile.js
"use client"
import Footer from '@/app/partials/footer';
import Header from '@/app/partials/header';
import { useState, useEffect } from 'react';

const AdminProfile = ({ loggedInUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from the server
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => {
        // Filter out admin users
        const filteredUsers = data.filter(user => user.role !== 'admin');
        setUsers(filteredUsers);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleRoleChange = (userId, newRole) => {
    // Fetch the user data
    const userToUpdate = users.find(user => user._id === userId);
    console.log(userToUpdate)
    console.log(newRole)
    // Update user role on the server
    fetch(`http://localhost:3001/api/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userToUpdate, // Include existing user data
        role: newRole,    // Update only the role
      }),
    })
      .then(response => response.json())
      .then(updatedUser => {
        // Update the local state with the modified user
        setUsers(users.map(user => (user._id === userId ? updatedUser : user)));
      })
      .catch(error => console.error('Error updating user role:', error));
  };

  const handleDeleteUser = (userId) => {
    // Confirm deletion
    const confirmDeletion = window.confirm('Are you sure you want to delete this user?');

    if (!confirmDeletion) {
      return;
    }

    // Delete user on the server
    fetch(`http://localhost:3001/api/profile/${userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted user from the local state
        setUsers(users.filter(user => user._id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <>
     <Header />
        <section className="container mx-auto mt-32 h-screen px-4">
       
      <h1 className="text-3xl font-semibold mb-4">Admin Profile</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="mr-2 bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={() => handleRoleChange(user._id, user.role === 'user' ? 'moderator' : 'user')}
                  >
                    Make {user.role === 'user' ? 'moderator' : 'user'}
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
         
          ))}
        </tbody>
      </table>
      
    </section>
    <Footer />
    </>

  );
};

export default AdminProfile;
