// Importing the axios
import axios from "axios"

// Importing the API Url From the constants file
import { randomJokesAPI } from "../utils/constants.js"

// Function to get the Jokes Data From the API
export async function getJokesData() {

    try {
        // Using the axios function to get the data
        const response = await axios.get(randomJokesAPI);

        // Returning the data
        return response.data

    } catch (error) {

        // Returning NULL if any error occurs
        return null;
    }

}