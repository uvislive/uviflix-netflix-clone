import React from 'react'
import "./Navbar.css"
import { AccountBox } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
function Navbar() {
    return (
        <nav>
            <div className="navbar_content">

                <img src="netflix.png" alt="netflix" />
                <div className="profile">
                    {/* <AccountBox className='profile' color="secondary" sx={{ fontSize: "large" }} /> */}
                    {/* <Avatar className='profile' src='uv.png' /> */}
                    <Avatar src='' />
                    <h4>uvislive</h4>
                </div>

            </div>


        </nav>
    )
}

export default Navbar