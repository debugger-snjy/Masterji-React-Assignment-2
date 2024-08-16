import React, { useRef, useState } from 'react'

function CatsCard(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleImageError = () => {
        // Handle error, e.g., log error, display error message
        console.error('Image failed to load');
    };

    return (
        <div class="max-w-md align-top inline-block mx-5 rounded-3xl overflow-hidden shadow-lg whitespace-normal">
            <div class="w-full h-[400px] bg-gray-100 overflow-hidden">
                <img className='w-full h-full object-cover' src={props.catDetails.image} alt={props.catDetails.alt_names} effect="blur" />
                {
                    !isLoaded && (
                        <div className="w-full h-full bg-gray-400 animate-pulse"></div>
                    )
                }
                {
                    isLoaded && (
                        <img
                            src={props.catDetails.image} alt={props.catDetails.alt_names}
                            className="object-cover w-full h-full"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            ref={imgRef}
                        />
                    )
                }
            </div>
            <div className='p-4 px-6 bg-white'>
                <div class="">
                    <div class="font-bold text-xl mb-2">{props.catDetails.name}</div>
                    <p class="text-gray-700 text-base">
                        {props.catDetails.description}
                    </p>
                </div>

                <div className='flex text-lg font-DM mt-3'>
                    <div className='w-1/3 font-bold italic'>Origin</div>
                    <div className='w-2/3'>{props.catDetails.origin}</div>
                </div>

                <div className='flex flex-col text-lg font-DM mt-2  gap-2'>
                    <div className='font-bold italic'>Temperament</div>
                    <div className='tracking-tight'>
                        {
                            props.catDetails.temperament.split(',').map((temp) => {
                                return <span class="inline-block bg-[#EFEFEF] hover:bg-[#D482DB] rounded-full px-3 py-1 text-base font-light text-[#353535] hover:text-white cursor-pointer mr-2 mb-2">{temp}</span>
                            })
                        }
                    </div>
                </div>

                <div className='flex text-lg font-DM mt-3'>
                    <div className='w-1/3 font-bold italic'>Life Span</div>
                    <div className='w-2/3'>{props.catDetails.life_span} years</div>
                </div>

                <div className="mt-10 text-[#7D99E2] font-medium text-base">
                    <a href={props.catDetails.wikipedia_url}>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default CatsCard