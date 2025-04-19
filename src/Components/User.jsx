import React from 'react'

const User = ({name,role}) => {
    const style={
        color:'white'
    }
  return (
    <div>
      <h2 style={style}> Welcome {name} Logged in as {role}</h2>
    </div>
  )
}

export default User
