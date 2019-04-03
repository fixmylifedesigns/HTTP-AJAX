import React from "react";
import styled from 'styled-components'


const FriendsList = styled.div`
text-align: left;
display:flex;
justify-content:center;
flex-wrap:wrap;
/* border:solid; */

`
const Friend = styled.div`
width:200px;
padding:20px;
margin:10px;
border:grey solid;
border-radius: 10px;
background:white;
/* display:flex;
flex-direction:row; */

`


function FriendList(props) {
  return (
    <FriendsList>
      {props.friends.map(friend => (
        <Friend key={friend.id}>
        <div>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          </div>
        </Friend>
      ))}
    </FriendsList>
  );
}

export default FriendList;
