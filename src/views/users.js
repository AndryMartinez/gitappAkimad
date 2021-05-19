import ListUsers from '../components/ListUsers'
import React, { useState, useEffect } from 'react';
import CardUser from '../components/card'
import Search from '../components/search'
import CircularIndeterminate from '../components/progress';

function Users() {

  const [users, setUsers] = useState({});
  const [load, setLoad] = useState(false);

  function isEmpty(str) {
    return str == null || !str.trim().length
  }

  useEffect(() => {
    runAllUsers()
  },[]);

  async function getUsers() {
    let result = await fetch('https://api.github.com/users')
    return await result.json()
  }

  async function searchUsers(search) {
    let result = await fetch('https://api.github.com/search/users?q='+search)
    return await result.json()
  }


  let runAllUsers = ()=>{
    setLoad(false)
    setUsers({})
    getUsers().then(users=>{
      setUsers(users)
      setLoad(true)
    })
  }

  let runSearch = search=>{
    setLoad(false)
    setUsers({})
    searchUsers(search).then(users=>{
      setUsers(users.items)
      setLoad(true)
      console.log(users.items);
    })
  }

  return (
    <div style={{
      backgroundColor:'#d3d3d3',
      display:'flex',
      alignItems:'center',
      flexDirection: 'column'
   }}>
      <Search load={load} submit={query=>{
          if(!isEmpty(query)){
            runSearch(query)
          }else{
            runAllUsers()
          }
        }} 
        style={{ 
          marginTop:20,
          marginBottom:20,
        }}
      />
      {load && users?
      <CardUser >
        <ListUsers 
          users={users} 
        />
      </CardUser>
        :
        <CircularIndeterminate />
      }
    </div>
    )
  }

  export default Users;