import { Client, Query, ID, TablesDB } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

// export const updateSearchCount = async () => {
//     console.log(PROJECT_ID, DATABASE_ID, TABLE_ID);
// };

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
    /* Use Appwrite SDK to check if the search term exists in the database
        If it does, update the count
        If not, create a new document with the search term and count as 1 */

    try {
    } catch (error) {
        console.log(error);
    }
};
