import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleFriend = (props) => {
    const {name, username, id} = props.friend;
    // nested router
    //==============================
    const navigate = useNavigate()

    const showFriendDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={"/friend/"+ id }>Show Detail</Link>
            {/* or */}
            <button onClick={showFriendDetail}>{username} id: {id}</button>
        </div>
    );
};

export default SingleFriend;