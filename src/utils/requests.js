const API_KEY = "504b85f6fe0a10a9c7f35945e14e7ddf";

const requests = {
  fetchTrending: `api/movies/trending?&token=8qlOkxz4wq`,
  fetchNetflixOriginals: `api/movies/trending?&token=8qlOkxz4wq`,
  fetchTopRated: `api/movies/top-rate?&token=8qlOkxz4wq`,
  fetchActionMovies: `api/movies/discover?&genre=28&token=8qlOkxz4wq`,
  fetchComedyMovies: `api/movies/discover?&genre=35&token=8qlOkxz4wq`,
  fetchHorrorMovies: `api/movies/discover?&genre=27&token=8qlOkxz4wq`,
  fetchRomanceMovies: `api/movies/discover?&genre=10749&token=8qlOkxz4wq`,
  fetchDocumentaries: `api/movies/discover?&genre=99&token=8qlOkxz4wq`,
  fetchSearch: `api/movies/search?&token=8qlOkxz4wq`,
  fetchVideo: `api/movies/video?&token=8qlOkxz4wq`,
};

export default requests;
