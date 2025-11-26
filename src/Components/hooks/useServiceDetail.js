import { useEffect, useState } from "react";

const useServiceDetail = serviceId =>{
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `https://vercel-backhandjournal-7xz3.onrender.com/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [serviceId]);
    return [service]
}

export default useServiceDetail;