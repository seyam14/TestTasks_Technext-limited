// UserList.js
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOption === 'name') {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
    } else if (sortOption === 'email') {
      return a.email.localeCompare(b.email);
    } else if (sortOption === 'company') {
      return a.company.name.localeCompare(b.company.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Sort by...</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>
      <h1 className="text-3xl font-bold text-blue-500 mb-8">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {sortedUsers.map(user => (
          <div key={user.id} className="bg-white shadow-md rounded-md p-4">
            <img src={user.image} alt="Avatar" className="w-full rounded-md mb-4" />
            <Link to={`/${user.id}`} className="block">
              <h2 className="text-xl font-semibold mb-2">Name: {user.firstName} {user.lastName}</h2>
            </Link>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-2">Address: {user.address.address}, {user.address.city}, {user.address.postalCode}</p>
            <p className="text-gray-600">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
