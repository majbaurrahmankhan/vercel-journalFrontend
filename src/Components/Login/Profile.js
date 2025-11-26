// import React from 'react';

// const Profile = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Profile;

import React from 'react';
import { useForm } from "react-hook-form";
//majba
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if(user){
        console.log("hi",user)
    }
        const onSubmit = data => {
            
        console.log(data);
        const url = `https://vercel-backhandjournal-7xz3.onrender.com/userLike`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Profile</h2>
            <img src={user?.photoURL} alt='User Photo'></img>
            <br/>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2' type="text"  value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")}/>        
                <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true})} />
                <input  type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default Profile;