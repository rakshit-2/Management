import * as React from 'react';
import ProfileMain from './../../organisms/profile';
import Nav from './../../organisms/nav'



const Profile = (props) => {
    return(
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <ProfileMain/>
                </div>
            </div>
        </div>
    )
}


export default Profile;