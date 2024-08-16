import React, { useEffect, useState } from 'react'
import JokeCard from "../components/JokesCard";
import chaiAurCodeIcon from "../assets/chaiAurCodeIcon.png"
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
        <>
            <div className='jokePage flex items-center justify-center h-screen'>
                <div className='w-2/5'>
                    <JokeCard data={jokeData} isLoading={isLoading} />
                </div>
            </div>
            <a href="https://chaicode.com" target='_blank'><img src={chaiAurCodeIcon} className='absolute bottom-6 right-6 w-20 h-20' alt="Chai Aur Code Icon" /></a>
        </>
    )
}

export default RandomJokesPage