import React from 'react'

function CatsSkeletonCard(props) {
    return (
        <div class="w-[400px] align-top inline-block mx-5 rounded-3xl overflow-hidden shadow-lg whitespace-normal">
            <div class="w-full h-[400px] bg-gray-200 animate-pulse rounded-t-3xl">
            </div>

            <div className="p-4 px-6 bg-white">
                <div class="animate-pulse space-y-4">
                    <div class="h-6 bg-gray-200 rounded-lg"></div>

                    <div class="h-4 bg-gray-200 rounded-lg"></div>

                    <div class="flex space-x-4">
                        <div class="w-1/3 h-4 bg-gray-200 rounded-lg font-bold"></div>
                        <div class="w-2/3 h-4 bg-gray-200 rounded-lg"></div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="h-4 bg-gray-200 rounded-lg font-bold"></div>
                        <div class="flex space-x-2">
                            <div class="h-4 bg-gray-200 rounded-lg w-1/3"></div>
                            <div class="h-4 bg-gray-200 rounded-lg w-2/3"></div>
                        </div>
                        <div class="h-4 bg-gray-200 rounded-lg"></div>
                        <div class="h-4 bg-gray-200 rounded-lg"></div>
                    </div>

                    <div class="flex space-x-4">
                        <div class="w-1/3 h-4 bg-gray-200 rounded-lg font-bold"></div>
                        <div class="w-2/3 h-4 bg-gray-200 rounded-lg"></div>
                    </div>

                    <div class="h-4 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default CatsSkeletonCard