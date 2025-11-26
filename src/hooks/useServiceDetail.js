import { useEffect, useState } from "react";

const useServiceDetail = addedItemId =>{
    const [addedItem, setAddedItem] = useState({});

    useEffect( () =>{
        const url = `https://vercel-backhandjournal-7xz3.onrender.com/addedItem/${addedItemId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setAddedItem(data));

    }, [addedItemId]);
    return [addedItem]
}

export default useServiceDetail;