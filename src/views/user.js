import React, { useState, useEffect } from 'react';
import CardUser from '../components/card'
import ListOrg from '../components/list'
import CircularIndeterminate from '../components/progress';
import ImageAvatars from '../components/avatar';
import {
  Link,
  useParams
} from 'react-router-dom'
import ListRepos from '../components/listRepos';
import ButtonArrowLeft from '../components/buttonArrowLeft';

function User() {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState({});
  const [org, setOrg] = useState({});
  const [load, setLoad] = useState(false);

  async function getUser(id) {
    let result = await fetch('https://api.github.com/users/'+id)
    return await result.json()
  }
  async function getRepos(rep) {
    let result = await fetch(rep)
    return await result.json()
  }

  async function getOrg(org) {
    let result = await fetch(org)
    return await result.json()
  }
  useEffect(() => {
    runUser(id)
  },[]);

  let runUser = (id)=>{
    setLoad(false)
    setUser({})
    getUser(id).then(user=>{
      setUser(user)
      getRepos(user.repos_url).then(repos=>{
        setRepos(repos)
        getOrg(user.organizations_url).then(org=>{
          setOrg(org)
          setLoad(true)
        })
      })
    })
  }

  if (load) {
    return (
      <div style={{
        backgroundColor:'#d3d3d3',
        display:'flex',
        alignItems:'center',
        flexDirection: 'column',
        paddingTop:20
      }}>
        <CardUser >
          <div style={{ 
            position:'absolute'
          }}>
            <Link to={'/user'} style={{ textDecoration: 'none' ,color:'black'}}>
              <ButtonArrowLeft />
            </Link>
          </div>
          <div style={{ 
            display:'flex',
            alignItems:'center',
            flexDirection: 'column'
          }}>
            <ImageAvatars style={{ width:100,height:100 }} src={user.avatar_url} />
            <p><strong>Usuario: </strong>{user.login}</p>
          </div>
          <h4>Organization:</h4>
          <ListOrg list={org} />
          <h4>Repositories:</h4>
          <ListRepos list={repos} />
        </CardUser>
      </div>
    )
  }else{
    return <CircularIndeterminate />
  }
}

export default User;