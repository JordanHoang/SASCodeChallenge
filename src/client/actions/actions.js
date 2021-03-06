import axios from 'axios';

export async function retrieveClues(queryParams) {
  
  let cluesResponse;
  try {
    const cluesResponse = await axios.get(
      `http://jservice.io/api/clues/?category=${queryParams.categoryId}&max_date=${queryParams.max_date}&min_date=${queryParams.min_date}`);
    console.log('cluesResponse', cluesResponse.data);
    return cluesResponse.data;
  } catch (error) {
    console.error(error);
  }
}