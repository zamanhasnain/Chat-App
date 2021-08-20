import './userlist_style.css'
import React, { useState } from 'react'
import { GetAllUsers} from '../../Firebase/Firebase_ref';

let url = 'https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

function UsersListComponent(props) {
    const [users, setUsers] = React.useState([])
    let x = [];
    React.useEffect(() => {
        GetAllUsers().on('child_added', function (snapshot) {
            x.push(snapshot.val())
            setUsers(x)
        });
    }, [users])


    let text = "sample_message"
    return (
        <div className="UserComponent">
                {(users).map((user) => {
                    return (
                    <div className="User" onClick={(e)=>{{props.set_message_to(e.target.textContent)}}}>
                        <img id="img_user" src={url}></img>
                        <p  id="btn_user" >{user.userName}</p>
                    </div>
                   
                    )
                })}

        </div>
    );
}
export default UsersListComponent;
