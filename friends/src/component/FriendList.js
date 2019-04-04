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
const friend = props.friends.find(friend => {
  return`${friend.id}` === props.match.params.friendId;
})
// if (!friend) return <h3>loading </h3>

  const updateFriend = e => {
    e.preventDefault();
    props.setActiveFriend(friend);
    props.history.push('/update-friend');
  };

const deleteFriend = e => {
  e.preventDefault()
  props.deleteFriend(friend.id);
}

  return (
    <FriendsList>
      {props.friends.map(friend => (
        <Friend key={friend.id}>
        <div>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          </div>
          <button onClick={updateFriend}> Update </button>
          <button onClick={deleteFriend}>Delete</button>
        </Friend>
      ))}
    </FriendsList>
  );
}

export default FriendList;
