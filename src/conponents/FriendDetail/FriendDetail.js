import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    //to access which parameter url we go.
    // const params = useParams();
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h2>This is detail of a bondhu: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>email: {friend.email}</h4>
            <h4>website: {friend.website}</h4>
            {/* if the value is true than you are allowed to find city otherwise, dont go to find the city. */}
            <p>address: {friend.address?.city}</p>
            <p>let: {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetail;