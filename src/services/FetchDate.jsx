import React, { use } from 'react'
import { useState,useEffect } from 'react'

export const FetchDate = ({url}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

    async function fetchData() {
    try {
    const res = await fetch(url);
    const json = await res.json();
    setData(json || []);
    console.log(json);
    }
    catch (err) {
        setError(err);
        setData([]);
    }
    finally{
        setLoading(false);
    }
    }
    fetchData();

    },[]);

    return {data, loading, error};
}
