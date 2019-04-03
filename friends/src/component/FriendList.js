import React from "react";
import styled from 'styled-components'


const FriendsList = styled.div`
text-align: left;
/* display:flex;
wrap:wrap;
padding:20px; */

`
const Friend = styled.div`
border:solid;
display:flex;
flex-direction:row;

`


function FriendList(props) {
  return (
    <FriendsList>
      {props.friends.map(friend => (
        <Friend key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </Friend>
      ))}
    </FriendsList>
  );
}

export default FriendList;
