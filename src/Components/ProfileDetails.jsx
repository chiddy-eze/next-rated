import React from 'react';

function ProfileDetails() {
    // state = {
    //      members: [{
    //         id: 1,
    //         value: 'Firstname'
             
    //      }]
    // }
       
    const firstname = "Firstname";
    const lastname = "Lastname";
    const phone = "+2348105438331";
    const email = "hello@encodeup.com";
    const password = "******************";

    return(
        <div>
            
            <div className='main'>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                
                <div>
                    <h6>Name</h6>
                    <input type="text" placeholder={firstname}/>
                    <a href='#'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <hr className='hr' disabled></hr>
                    <input type="text" placeholder={lastname} />
                    <a href='#'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <hr></hr>
                    
                </div>
            </div>
            
           
            <div className='main'>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <div>
                    <h6>Phone</h6>
                    <input type="phone" placeholder={phone} />
                    <a href='#'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <hr className='hr'></hr>
                </div>
            </div>

           
            <div className='main'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <div>
                    <h6>Email</h6>
                    <input type="email" placeholder={email} />
                    <a href='#'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <hr className='hr'></hr>
                </div> 
            </div>
            
            <div className='main'>
                <i class="fa fa-lock" aria-hidden="true"></i>
                <div>
                    <h6>Change Password</h6>
                    <input type="password" placeholder={password} />
                    <a href='#'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <hr className='hr'></hr>
                </div>
            </div>
            
            <div className='main'>
                <i class="fa fa-power-off" aria-hidden="true"></i>
                <div>
                    <a href='#'><h5>Logout</h5></a>
                </div>
            </div>
           
        </div>
    ) 
}
 
export default ProfileDetails;