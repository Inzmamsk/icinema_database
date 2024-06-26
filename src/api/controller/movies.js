const { fetchAllMovies, addMovie } = require('../../services/movies');

exports.getAllMovies = async (req, res) => {
  console.log(req, "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
  try {
    const { query } = req;
    const { movies } = await fetchAllMovies(query);
    if (movies.length < 1) {
      return res.status(404).json({ message: 'No movies found in database!' });
    }
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong, when trying to fetch movies!',
      error
    });
  }
};

exports.createMovie = async (req, res) => {
  const { title } = req.body;
  try {
    const movie = await addMovie(title);
    return res.status(201).json({ movie });
  } catch (error) {
    return res
      .status(400)
      .json({ messege: 'Bad request! Could not find movie title', error });
  }
};
