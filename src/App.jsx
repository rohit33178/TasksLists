import React from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getAuthenticatedUser } from './api/auth';


export default function App() {
  
  const {data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getAuthenticatedUser
  })
  if(isLoading) return (<p>Loading...</p>)
  console.log(user)
  return (
    <div>
      <h1>PMT</h1>
      <div>
        <h2>Welcome {user.user_metadata.name}</h2>
        <p>
          ID: {user.user_metadata.sub} <br />
          EMAIL: {user.user_metadata.email}
        </p>
        <button>Logout</button>
      </div>
    </div>
  );
}
