import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header';
import { type UserProps } from '@/interfaces';
import React, { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState<UserProps[]>([])

     useEffect(() => {
    async function getStaticProps() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    getStaticProps();
  }, []);
  return (
    <>
        <Header />
        <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">Users</h1>

        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>

    </>
  )
}

export default Users