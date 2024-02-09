// UserDetails.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-md p-4">
        <img src={user.image} alt="Avatar" className="w-40 h-32 rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">Name: {user.firstName} {user.lastName}</h2>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-2">Address: {user.address.address}, {user.address.city}, {user.address.postalCode}</p>
        <p className="text-gray-600">Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
