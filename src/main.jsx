// Importing React
import React from 'react'

// Importing React DOM
import ReactDOM from 'react-dom/client'

// Importing the Functions and Components needed from react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Importing the CSS
import './index.css'

// Importing the Pages
import RandomUserPage from './pages/randomUserPage'
import RandomJokesPage from './pages/randomJokesPage'
import CatListingPage from './pages/catListingPage'

// Created router and all its path 
const myMasterjiRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/'>

            {/* Home Page (/) => Will be Redirected to the Random User Page */}
            <Route path='' element={<RandomUserPage />} />,

            {/* Random User Page (/random-user) => Will Render the Random User Page */}
            <Route path='/random-user' element={<RandomUserPage />} />,

            {/* Random Joke Page (/random-jokes) => Will Render the Random Jokes Page */}
            <Route path='/random-jokes' element={<RandomJokesPage />} />,

            {/* Cats Listing Page (/cats-listing) => Will Render the Cats Listing Page */}
            <Route path='/cats-listing' element={<CatListingPage />} />,
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // We have to remove this StrictMode because it will cause the code to run twice
    // <React.StrictMode>

    // Adding the RouterProvider Tag
    <RouterProvider router={myMasterjiRouter} />

    // </React.StrictMode>
)