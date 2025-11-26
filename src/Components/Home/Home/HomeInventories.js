import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import HomeProduct from './HomeProduct';
import './Hinventories.css'
import auth from '../../../firebase.init';


const HomeInventories = () => {
    
    const [user] = useAuthState(auth);
    const [addItems, setAddItems] = useState([])
    useEffect(() => {
        const getAddItems = async () => {
            const email = user.email
            const url = `https://vercel-backhandjournal-7xz3.onrender.com/addedItem?email=${email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(result => {
                    setAddItems(result)
                })
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    }, [user])
    return (
        <div className='container'>
            <h2 className='m-4'>TOTAL UPCOMMING GAMES: {addItems.length}</h2>

            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    addItems.map(addItem => <HomeProduct
                        key={addItem._id}
                        addItem={addItem}
                    >
                    </HomeProduct>)
                }
            </div>
        </div>
    );
};

export default HomeInventories;