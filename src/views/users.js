import ListUsers from '../components/ListUsers'
import React, { useState, useEffect } from 'react';
import CardUser from '../components/card'
import Search from '../components/search'

function Users() {

  const [users, setUsers] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false)
    getUsers().then(users=>{
      setUsers(users)
      setLoad(true)
   })
  },[]);

  async function getUsers() {
    let result = await fetch('https://api.github.com/users')
    return await result.json()
  }

  async function searchUsers(search) {
    let result = await fetch('https://api.github.com/search/users?q='+search)
    return await result.json()
  }

  let runSearch = search=>{
    setLoad(false)
    searchUsers(search).then(users=>{
      setUsers(users)
      setLoad(true)
    })
  }

  return (
    <div style={{
      backgroundColor:'#d3d3d3',
      display:'flex',
      AlignItems:'center',
      flexDirection: 'column'
   }}>
      <Search submit={query=>{
        runSearch(query)
      }} />
      {load?
      <CardUser >
        <ListUsers users={users} />
      </CardUser>
        :
        "cargando..."
      }
    </div>
    )
  }

  export default Users;