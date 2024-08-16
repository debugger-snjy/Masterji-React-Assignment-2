// Importing the axios
import axios from "axios"

// Importing the API Url From the constants file
import { catsListingAPI } from "../utils/constants.js"

// Function to get the Jokes Data From the API
export async function getJokesData(page, limit) {

    try {
        // Using the axios function to get the data
        // Adding the Parameters for fetching the data as well
        const response = await axios.get(catsListingAPI + `?page=${page}&limit=${limit}`);

        // Returning the data
        return response.data

    } catch (error) {

        // Returning NULL if any error occurs
        return null;
    }

}