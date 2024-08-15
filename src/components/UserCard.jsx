import { ArrowLeft, MapPin, Phone, RefreshCw, RotateCw } from 'lucide-react'
import chaiAurCodeIcon from "../assets/chaiAurCodeIcon.png"
import React from 'react'

function UserCard() {
    return (
        <div class="font-DM p-6 bg-[#B6B3F3] border-8 relative border-white rounded-xl shadow">

            {/* Top Header of the Card */}
            <div className="flex justify-between items-center">
                <ArrowLeft height={"20px"} width={"20px"} />
                <span className='text-lg font-semibold text-black/70'>
                    Profile Overview
                </span>
                <RotateCw height={"20px"} width={"20px"} />
            </div>

            {/* Image of the User */}
            <div className='mt-6 flex justify-center items-start'>
                <img src="https://randomuser.me/api/portraits/men/4.jpg" className='inline rounded-full drop-shadow-xl h-[90px] w-[90px]' alt="" />

                <span class="bg-black text-white text-xs font-medium w-100 me-2 px-2.5 py-0.5 rounded-full absolute translate-x-14">Mr</span>
            </div>

            {/* Name of the User */}
            <div className='text-center text-2xl font-bold mt-3 tracking-wide'>Tom Garza</div>

            {/* Id of the user */}
            <div className='text-center text-md mt-1'>unknowns355</div>

            {/* Adding the Location and Call Buttons */}
            <div className="mt-3 flex py-2 text-sm border border-x-0 border-y-1 border-black/15 gap-10 justify-center items-center">
                <div className='flex flex-row items-center gap-2'>
                    <MapPin height={"25px"} width={"25px"} fill='black' stroke='white' strokeWidth={"2px"} className='inline bg-black rounded-full p-1' /> <span className="text-sm">Location</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <Phone height={"25px"} width={"25px"} fill='black' stroke='white' strokeWidth={"2px"} className='inline bg-black rounded-full p-1' /> <span className="text-sm">Call me</span>
                </div>
            </div>

            {/* Adding the User Details */}
            <div className="mt-3 flex flex-wrap justify-between">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <div className='text-sm'>City</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                    <div className="mb-4">
                        <div className='text-sm'>Date of Birth</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                    <div className="">
                        <div className='text-sm'>Time Zone</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <div className='text-sm'>Nationality</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                    <div className="mb-4">
                        <div className='text-sm'>Phone Number</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                    <div className="">
                        <div className='text-sm'>Registered Since</div>
                        <div className='text-lg'>Demo</div>
                    </div>
                </div>
            </div>

            {/* Adding the Platform and Copyright Mark */}

            <div className="mt-20 text-center text-white/40 text-sm font-bold">© chai aur code</div>
            <img src={chaiAurCodeIcon} className='absolute bottom-6 right-6' alt="Chai Aur Code Icon" />

        </div >
    )
}

export default UserCard