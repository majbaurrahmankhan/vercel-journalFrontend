import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from './../../Loading/Loading';
import useToken from './../../../hooks/useToken';
import Countryapi from '../../DropDown/MultipleDropdown';
import axios from 'axios';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [available, setAvailable] = useState(true);
    const [address, setAddress] = useState({
        country:"", division:"",district:""
    });
    const [allUser, setAllUser] = useState(null);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            localStorage.setItem('accessToken', user.user.accessToken);
        }

        console.log(user)
    },[user]);

    const navigateLogin = () => {
        navigate('/login');
    }



    useEffect(()=>{
       const func=async()=>{
        const {data} = await axios.get('https://vercel-backhandjournal-7xz3.onrender.com/user');
       let allName = { };
       data.forEach((item)=>{

        allName[item.name.toLowerCase()]=1
       }) 

       setAllUser(allName)
       }
       func();
    },[]);


    const handelchack=(name)=>{
        if(allUser[name.toLowerCase()]){
            setAvailable(false);
        }
        else{
            setAvailable(true);
        }

    }
    

    if(loading || updating){
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const birthday = event.target.birthday.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log('Updated profile');

        const {data} = await axios.post('https://vercel-backhandjournal-7xz3.onrender.com/user', {email,name,password,address,birthday});

        console.log(data)
        
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" onChange={(e)=>{
                    handelchack(e.target.value)
                }} id="" placeholder='Your Name' />
                {!available && <p className='notAvailable'>Name not available</p>}
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <Countryapi setAddress={setAddress}></Countryapi>
                <input type="date" name="birthday" id="" placeholder='birthday' />
                

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Dreams Vehicle Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;