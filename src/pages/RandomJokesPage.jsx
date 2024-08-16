import React, { useEffect, useState } from 'react'
import JokeCard from "../components/JokesCard";
import { getJokesData } from "../api/getRandomJoke.js";

function RandomJokesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [jokeData, setJokeData] = useState();

    async function fetchData() {
        setIsLoading(true);
        const data = await getJokesData();
        setJokeData(data.data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='jokePage flex items-center justify-center h-screen'>
            <div className='w-2/5'>
                <JokeCard data={jokeData} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default RandomJokesPage