import './userlist_style.css'
import React, { useState } from 'react'
import { GetAllUsers } from '../../Firebase/Firebase_ref';

let url = 'https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png';
let previous_selected = null;
function getData() {
    let x = [];
    GetAllUsers().on('child_added', function (snapshot) {
        x.push(snapshot.val())
    });
    return x;
}

function handleUserClick(e) {
    if (previous_selected != null) previous_selected.remove("User_selected");
    e.target.parentNode.classList.add("User_selected");
    previous_selected = e.target.parentNode.classList;
}
function UsersListComponent(props) {
    const [users, setUsers] = React.useState([])
    setInterval(() => {
        setUsers(getData())
    }, 900)

    let text = "sample_message"
    return (
        <div className="UserComponent">
            {(users).map((user) => {
                return (
                    <div className="Card">
                        <div className="User">
                            <img id="img_user" src={url}></img>
                            <p onClick={(e) => {{{ props.set_message_to(e.target.textContent)} props.setChatVisibility(true)} handleUserClick(e)}} id="btn_user" >{user.userName}</p>
       
                        </div>
                        <p className="divider_line"></p>
                    </div>

                )
            })}

        </div>
    );
}
export default UsersListComponent;
