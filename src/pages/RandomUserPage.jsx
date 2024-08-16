import React, { useEffect, useState } from 'react';
import UserCard from "../components/UserCard";
import { getUserData } from "../api/getRandomUser.js";

function RandomUserPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();

    async function fetchData() {
        setIsLoading(true);
        const data = await getUserData();
        setUserData(data.data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='userPage flex items-center justify-center h-screen'>
            <div className='w-1/4'>
                <UserCard data={userData} isLoading={isLoading} fetchAnotherRandomUser={fetchData} />
            </div>
        </div>
    )
}

export default RandomUserPage