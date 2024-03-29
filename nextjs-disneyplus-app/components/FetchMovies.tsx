import { Movies } from "@/typings";
import FeaturedCarousel from "./FeaturedCarousel";
import ShowsCarousel from "./ShowsCarousel";

async function FetchMovies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Movies;

  console.log(data);

  return (
    <div className="space-y-4 mx-4">
      <FeaturedCarousel data={data} />
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-white/80 text-lg font-semibold">Popular</h1>
      </div>
      <ShowsCarousel results={data.results.slice(0, 10)} />
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-white/80 text-lg font-semibold">Recently Added</h1>
      </div>
      <ShowsCarousel results={data.results.slice(10, 20)} />
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-white/80 text-lg font-semibold">
          Recommended For You
        </h1>
      </div>
      <ShowsCarousel results={data.results.slice(12, 20)} />
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-white/80 text-lg font-semibold">Trending</h1>
      </div>
      <ShowsCarousel results={data.results.slice(0, 10)} />
      <div className="py-6"></div>
    </div>
  );
}

export default FetchMovies;
