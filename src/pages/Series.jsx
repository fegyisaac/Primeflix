import SeriesCard from "../component/SeriesCard";

const num = [1,2,2,2,2,2,2,2,2,2,2,2]

const Movies = () => {
  return (
    <div className="container py-12">
      <div className=" flex_btw items-center pb-7 gap-9">
        <p className="w-[60px]">Series</p>
        <p className="flex-1 text-center">1 out of 395 Series | Primeflix</p>
      </div>
      <div className="grid grid-auto-fit-[9rem] gap-y-6">
        {num.map((n) => (
          <SeriesCard />
        ))}
      </div>
    </div>
  );
};

export default Movies;
