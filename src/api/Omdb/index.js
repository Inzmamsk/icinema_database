const Axios = require('axios');

async function getMovieByTitle(movieTitle) {
  try {
    console.log(result, "rrrrrrrrrrrrrrrrrrrrrrrrrr")
    const result = await Axios.get(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.API_KEY}`
    );
    return result.data.Response !== 'False' ? result.data : false;
  } catch (error) {
    throw new Error('Something went wrong in OMDB API');
  }
}

module.exports = { getMovieByTitle };
