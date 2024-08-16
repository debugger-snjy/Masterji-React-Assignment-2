import { ArrowLeft, BadgeCheck, Dot, Ellipsis } from 'lucide-react'
import React from 'react'
import elonMuskTwitterProfile from "../assets/elonMuskTwitterProfile.jpg"
import commentsIcon from "../assets/icons/comments_icon.svg"
import retweetIcon from "../assets/icons/retweet_icon.svg"
import likesIcon from "../assets/icons/likes_icon.svg"
import savedIcon from "../assets/icons/saved_icon.svg"
import shareIcon from "../assets/icons/share_icon.svg"

function getRandomNumber() {
    return (Math.random() * (100 - 1) + 23).toFixed(1);
}

function getRandomDateTime() {
    // Generate a random date between January 1, 2023, and today
    const start = new Date(2024, 0, 1);
    const end = new Date();
    const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    // Format the date as desired (example: ISO 8601)
    return randomTime;
}

function getRandomTime() {
    const randomDateTime = getRandomDateTime();

    // Options for formatting the time
    const options = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    };

    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(randomDateTime);

    return formattedTime;

}
function getRandomDate() {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const randomDateTime = getRandomDateTime();
    return `${months[randomDateTime.getMonth()]} ${randomDateTime.getDate()}, ${randomDateTime.getFullYear()}`;
}

function getRandomViews() {
    // Generate a random number of views between 0 and 100
    return `${Math.floor(Math.random() * 100)}${Math.floor(Math.random() * 10) > 5 ? 'M' : 'K'}`;
}

function JokesCard(props) {

    const loadingState = props.isLoading;
    const jokeData = props.data;

    console.log(loadingState);
    console.log(jokeData);

    // if (loadingState) {
    // return (
    //     <div class="bg-black p-10 pb-7 border-1 border-white rounded-3xl shadow">

    //         {/* Header Details */}
    //         <div className="flex items-center gap-5">
    //             <ArrowLeft stroke='white' height={"30px"} width={"30px"} />
    //             <span className='text-3xl font-semibold text-white'>
    //                 Post
    //             </span>
    //         </div>

    //         {/* Elon Musk Data and Options Icon */}
    //         <div class="flex justify-between items-center">

    //             {/* Elon Musk Images and Details */}
    //             <div class="mt-5 flex gap-3 items-start">

    //                 {/* Elon Image and Twitter Name with id */}
    //                 <div class="w-16 h-16 bg-gray-500 rounded-full animate-pulse"></div>
    //                 <div class="flex flex-col">
    //                     <div class="flex font-bold text-3xl">
    //                         <span class="text-white animate-pulse"></span>
    //                         <div class="ml-1 h-5 w-5 bg-gray-500 rounded-full animate-pulse"></div>
    //                     </div>
    //                     <div class="text-gray-300 text-xl animate-pulse">@elonmusk</div>
    //                 </div>

    //             </div>

    //             {/* Adding the Options Button */}
    //             <div class="h-6 w-6 bg-gray-500 rounded-full animate-pulse"></div>
    //         </div>

    //         {/* Adding the Joke */}
    //         <div class="text-white text-xl mt-4 text-wrap text-justify w-full tracking-tight">
    //             <div class="h-3 bg-gray-500 rounded animate-pulse"></div>
    //             <div class="h-3 bg-gray-500 rounded mt-1 animate-pulse"></div>
    //             <div class="h-2 bg-gray-500 rounded mt-1 animate-pulse"></div>
    //         </div>

    //         {/* Adding the Analytics */}
    //         <div class="flex text-[#A0A0A0] text-md mt-7 gap-0 items-center">
    //             <div class="h-4 w-14 bg-gray-500 rounded animate-pulse"></div>
    //             <div>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
    //             </div>
    //             <div class="h-4 w-14 bg-gray-500 rounded animate-pulse"></div>
    //             <div>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
    //             </div>
    //             <div><span class="text-white font-bold animate-pulse">123</span> Views</div>
    //         </div>

    //         {/* Adding the Likes, Comments, Tweet, saved and share buttons with their numbers */}
    //         <div class="mt-5 flex p-5 text-sm text-[#71767B] border border-x-0 border-y-1 border-white/15 gap-10 justify-between items-center">
    //             <div class="flex gap-2">
    //                 <img src="comments-icon.svg" alt="Comments Icon" class="w-[23px] h-[23px] bg-gray-500 rounded-full animate-pulse" />
    //                 <span class="animate-pulse">12K</span>
    //             </div>
    //             <div class="flex gap-2">
    //                 <img src="retweet-icon.svg" alt="Retweet Icon" class="w-[23px] h-[23px] bg-gray-500 rounded-full animate-pulse" />
    //                 <span class="animate-pulse">9K</span>
    //             </div>
    //             <div class="flex gap-2">
    //                 <img src="likes-icon.svg" alt="Likes Icon" class="w-[23px] h-[23px] bg-gray-500 rounded-full animate-pulse" />
    //                 <span class="animate-pulse">23K</span>
    //             </div>
    //             <div class="flex gap-2">
    //                 <img src="saved-icon.svg" alt="Saved Icon" class="w-[23px] h-[23px] bg-gray-500 rounded-full animate-pulse" />
    //                 <span class="animate-pulse">5K</span>
    //             </div>
    //             <div class="">
    //                 <img src="share-icon.svg" alt="Share Icon" class="w-[23px] h-[23px] bg-gray-500 rounded-full animate-pulse" />
    //             </div>
    //         </div>

    //         {/* Adding the chaiaurcode copyright */}
    //         <div class="mt-5 mb-0 flex justify-center items-center text-[#71767B]">
    //             <div>© chai aur code</div>
    //         </div>
    //     </div>
    // )
    // }

    return (
        <div className='bg-black p-10 pb-7 border-1 border-white rounded-3xl shadow'>

            {/* Header Details */}
            <div className="flex items-center gap-5">
                <ArrowLeft stroke='white' height={"30px"} width={"30px"} />
                <span className='text-3xl font-semibold text-white'>
                    Post
                </span>
            </div>

            {/* Elon Musk Data and Options Icon */}
            <div className="flex justify-between items-center">

                {/* Elon Musk Images and Details */}
                <div className="mt-5 flex gap-3 items-start">

                    {/* Elon Image and Twitter Name with id */}
                    <img src={elonMuskTwitterProfile} alt="" className='object-cover w-[80px] h-[80px] rounded-full' />

                    {/* Displaying the Name and its ID */}
                    <div className="flex flex-col">
                        <div className='flex font-bold text-3xl'>
                            <span className='text-white'>Elon Musk</span>

                            {/* Adding the Twitter Verification Badge */}
                            <div>
                                <BadgeCheck fill='#1c9bef' className='ml-1' height={"35px"} width={"35px"} />
                            </div>
                        </div>
                        <div className='text-gray-300 text-xl'>@elonmusk</div>
                    </div>

                </div>

                {/* Adding the Options Button */}
                <Ellipsis height={"30px"} width={"30px"} stroke='#A0A0A0' />

            </div>

            {/* Adding the Joke */}
            <div className='text-white text-xl mt-4 text-wrap text-justify w-full tracking-tight'>
                {jokeData?.content}
            </div>

            {/* Adding the Analytics */}
            <div className='flex text-[#A0A0A0] text-md mt-7 gap-0 items-center'>
                <div>{getRandomTime()}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
                </div>
                <div>{getRandomDate()}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
                </div>
                <div><span className='text-white font-bold'>{getRandomViews()}</span> Views</div>
            </div>

            {/* Adding the Likes, Comments, Tweet, saved and share buttons with their numbers */}
            <div className="mt-5 flex p-5 text-sm text-[#71767B] border border-x-0 border-y-1 border-white/15 gap-10 justify-between items-center">
                <div className='flex gap-2'>
                    <img src={commentsIcon} alt="Comments Icon" className='w-[23px] h-[23px]' />
                    {getRandomNumber()}K
                </div>
                <div className='flex gap-2'>
                    <img src={retweetIcon} alt="Retweet Icon" className='w-[23px] h-[23px]' />
                    {getRandomNumber()}K
                </div>
                <div className='flex gap-2'>
                    <img src={likesIcon} alt="Likes Icon" className='w-[23px] h-[23px]' />
                    {getRandomNumber()}K
                </div>
                <div className='flex gap-2'>
                    <img src={savedIcon} alt="Saved Icon" className='w-[23px] h-[23px]' />
                    {getRandomNumber()}K
                </div>
                <div className=''>
                    <img src={shareIcon} alt="Share Icon" className='w-[23px] h-[23px]' />
                </div>
            </div>

            {/* Adding the chaiaurcode copyright */}
            <div className='mt-5 mb-0 flex justify-center items-center text-[#71767B]'>
                <div>© chai aur code</div>
            </div>
        </div>
    )
}

export default JokesCard