import React from 'react'
export default function UseInfo(props) {
    console.log("props in userinfo",props);
    const {firstName} = props;
  return (
    <div>Full Name is {firstName} </div>
  )
}

