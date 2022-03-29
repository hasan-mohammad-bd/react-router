import React,{useEffect, useState} from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data));
    },[])
    return (
        <div>
            <h2>This is friends page</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, maiores?</p>
            <h1>{friends.length}</h1>
            {
                friends.map(friend => <SingleFriend friend={friend} key={friend.id} ></SingleFriend>)
            }
        </div>
    );
};

export default Friends;