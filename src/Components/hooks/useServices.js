import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://vercel-backhandjournal-7xz3.onrender.com/addedItem')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useServices;
