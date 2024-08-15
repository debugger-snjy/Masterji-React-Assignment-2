import React from 'react'
import UserCard from "../components/UserCard"

function RandomUserPage() {
    return (
        <div className='userPage flex items-center justify-center h-screen'>
            <div className='w-1/4'>
                <UserCard/>
            </div>
        </div>
    )
}

export default RandomUserPage