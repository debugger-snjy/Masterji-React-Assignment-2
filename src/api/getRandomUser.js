// Importing the axios
import axios from "axios";

// Importing the API Url From the constants file
import { randomUsersAPI } from "../utils/constants.js"

// Function to get the Users data from the Users API
export async function getUserData() {

    try {
        // Using the axios function to get the data
        const response = await axios.get(randomUsersAPI);
        
        // Returning the data
        return response.data

    } catch (error) {
        
        // Returning NULL if any error occurs
        return null;
    }

}