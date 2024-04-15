const APIKEY = "4e667ff76b067654d5dcf0877e5d89c7";
const MOVIEDBURL = "https://api.themoviedb.org/3/discover";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTY2N2ZmNzZiMDY3NjU0ZDVkY2YwODc3ZTVkODljNyIsInN1YiI6IjY1MDA3YTFkNTU0NWNhMDBhYjVkMzQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSwwLZ01o9yfHd0er31rQCL7bj5qAJF9uB6ipuB2o9Y",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
