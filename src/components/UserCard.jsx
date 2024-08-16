import { ArrowLeft, MapPin, Phone, RefreshCw, RotateCw, UserCircle2Icon } from 'lucide-react'
import chaiAurCodeIcon from "../assets/chaiAurCodeIcon.png"
import React from 'react'

function UserCard(props) {

    const loadingState = props.isLoading;
    const userData = props.data;
    const fetchAnotherRandomUser = props.fetchAnotherRandomUser;

    console.log(loadingState);
    console.log(userData);

    if (loadingState) {
        return (
            <div class="font-DM p-6 bg-[#B6B3F3] border-8 relative border-white rounded-3xl shadow">

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
                    <div class='flex justify-center items-center rounded-full drop-shadow-xl h-20 w-20 bg-gray-200 animate-pulse'>
                        <UserCircle2Icon height={"70px"} width={"70px"} strokeWidth={"1px"} strokeOpacity={"0.3"} stroke='gray' className='text-gray-200' />
                    </div>
                </div>

                {/* Name of the User */}
                <div className='flex justify-center items-center text-2xl font-bold mt-3 tracking-wide'>
                    <div class="h-7 w-32 bg-gray-200 rounded-sm animate-pulse"></div>
                </div>

                {/* Id of the user */}
                <div className='mt-2 flex justify-center items-center text-md'>
                    <div class="h-5 w-20 bg-gray-200 rounded-sm animate-pulse"></div>
                </div>

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
                <div className="mt-3 flex flex-wrap justify-between text-black/70">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className='text-xs'>City</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                        <div className="mb-4">
                            <div className='text-xs'>Date of Birth</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                        <div className="">
                            <div className='text-xs'>Time Zone</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className='text-xs'>Nationality</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                        <div className="mb-4">
                            <div className='text-xs'>Phone Number</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                        <div className="">
                            <div className='text-xs'>Registered Since</div>
                            <div class="h-6 w-100 bg-gray-200 rounded-sm animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Adding the Platform and Copyright Mark */}

                <div className="mt-20 text-center text-white/40 text-sm font-bold">© chai aur code</div>
                <img src={chaiAurCodeIcon} className='absolute bottom-6 right-6' alt="Chai Aur Code Icon" />
            </div>
        )
    }
    else {
        return (
            <div class="font-DM p-6 bg-[#B6B3F3] border-8 relative border-white rounded-3xl shadow">

                {/* Top Header of the Card */}
                <div className="flex justify-between items-center">
                    <ArrowLeft height={"20px"} width={"20px"} />
                    <span className='text-lg font-semibold text-black/70'>
                        Profile Overview
                    </span>
                    <RotateCw height={"20px"} width={"20px"} onClick={fetchAnotherRandomUser} />
                </div>

                {/* Image of the User */}
                <div className='mt-8 flex justify-center items-start'>
                    <img src={userData.picture.large} className='inline rounded-full drop-shadow-xl h-[90px] w-[90px]' alt="" />

                    <span class="bg-black text-white text-xs font-medium w-100 me-2 px-2.5 py-0.5 rounded-full absolute translate-x-14">{userData.name.title}</span>
                </div>

                {/* Name of the User */}
                <div className='text-center text-2xl font-bold mt-3 tracking-wide'>{userData.name.first} {userData.name.last}</div>

                {/* Id of the user */}
                <div className='text-center text-md mt-1'>{userData.login.username}</div>

                {/* Adding the Location and Call Buttons */}
                <div className="mt-3 flex py-2 text-sm border border-x-0 border-y-1 border-black/15 gap-10 justify-center items-center">
                    <div className='flex flex-row items-center gap-2'>
                        <a href={`https://www.google.com/maps/search/?api=1&query=${userData.location.coordinates.latitude},${userData.location.coordinates.longitude}&zoom=15`}>
                            <MapPin height={"25px"} width={"25px"} fill='black' stroke='white' strokeWidth={"2px"} className='inline bg-black rounded-full p-1' /> <span className="text-sm">Location</span>
                        </a>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <a href={`tel:${userData.phone ? userData.phone : userData.cell}`}>
                            <Phone height={"25px"} width={"25px"} fill='black' stroke='white' strokeWidth={"2px"} className='inline bg-black rounded-full p-1' /> <span className="text-sm">Call me</span>
                        </a>
                    </div>
                </div>

                {/* Adding the User Details */}
                <div className="mt-4 flex justify-between text-black/70 -gap-2">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className='text-xs'>City</div>
                            <div className='text-lg'>{userData.location.city}</div>
                        </div>
                        <div className="mb-4">
                            <div className='text-xs'>Date of Birth</div>
                            <div className='text-lg'>{new Date(userData.dob.date).toLocaleString()}</div>
                        </div>
                        <div className="">
                            <div className='text-xs'>Time Zone</div>
                            <div className='text-lg text-balance'>{userData.location.timezone.offset} ({userData.location.timezone.description})</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className='text-xs'>Nationality</div>
                            <div className='text-lg'>
                                <img src={`https://flagsapi.com/${userData.nat}/flat/64.png`} className='inline mr-2' height={"25px"} width={"25px"} />
                                {userData.nat}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className='text-xs'>Phone Number</div>
                            <div className='text-lg'>{userData.phone}</div>
                        </div>
                        <div className="">
                            <div className='text-xs'>Registered Since</div>
                            <div className='text-lg'>{new Date(userData.registered.date).toLocaleString()}</div>
                        </div>
                    </div>
                </div>

                {/* Adding the Platform and Copyright Mark */}

                <div className="mt-20 text-center text-white/40 text-sm font-bold">© chai aur code</div>
                <a href="https://chaicode.com" target='_blank'><img src={chaiAurCodeIcon} className='absolute bottom-6 right-6' alt="Chai Aur Code Icon" /></a>

            </div >
        )
    }

}

export default UserCard