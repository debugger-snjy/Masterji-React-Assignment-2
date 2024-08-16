import React, { useEffect, useState } from 'react'
import CatsCard from '../components/CatsCard'
import { getCatsData } from "../api/getCatsLists.js"
import CatsSkeletonCard from '../components/CatsSkeletonCard.jsx';

function CatListingPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [catsData, setCatsData] = useState();
    const [otherData, setOtherData] = useState();
    const [page, setPage] = useState(1)

    async function fetchData() {
        setIsLoading(true);
        console.log(page);

        const data = await getCatsData(page, 4);
        if (catsData) {
            var prevData = catsData;
            console.log("123 Previous Data : ", prevData);
            console.log("123 New Data : ", data.data.data);

            prevData.push(...data.data.data)
            setCatsData(prevData)
        }
        else {
            setCatsData(data.data.data)
            setPage((page) => page + 1)
        }
        setOtherData(data.data)
        console.log(data.data)
        setIsLoading(false);
    }

    function checkScroll(e) {
        const remainingWidth = e.target.scrollWidth - e.target.scrollLeft - e.target.clientWidth;
        if (remainingWidth <= 500) {

            if (otherData.nextPage) {

                setPage((page) => page + 1)

                // calling the function to load other data 
                fetchData();
            }

        }
    }

    useEffect(() => {
        fetchData();
        console.log(catsData);
    }, [])

    return (
        <div className={`p-9 catListingPage flex-col items-center justify-center ${isLoading ? 'h-screen' : 'h-full'}`}>
            <div className="text-5xl mb-7 font-bold text-white">Cats around us</div>
            <div className="horizontalScrolling overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar" onScroll={checkScroll}>
                {console.log(catsData)}
                {catsData && catsData.map((data) => (
                    <CatsCard catDetails={data} key={data.id} />
                ))}
                {
                    isLoading && <div className='inline mr-3'>
                        <CatsSkeletonCard />
                    </div>
                }
            </div>
        </div>
    )
}

export default CatListingPage