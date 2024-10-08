import RAY_DARK from "../assets/img/ray_day.png";

function VideoSection() {
  return (
    <section className="h-[750px] relative top-0">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source
          src="https://res.cloudinary.com/dgfkry5fw/video/upload/v1725319178/6388397-uhd_3840_2160_25fps_gogmcc.mp4"
          type="video/mp4"
        />
      </video>
      <section className="lg:w-[1085px] absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-7xl mx-auto flex justify-center sm:justify-start">

        <div className="ml-7 2xl:ml-0 relative h-16 bottom-0 mb-[170px] flex flex-col gap-4 text-black">
          <hr className="w-[55%] border-[2px] border-yellow rounded-full" />
          <h1 className="sm:text-left text-left text-4xl sm:text-5xl text-white mb-2">
            HARD ROCK GAME.<br />TIME TO CHANGE
          </h1>
          <div className="mx-auto sm:m-0 w-full flex items-center justify-center">
            <button className="flex gap-3 items-center justify-center text-xl sm:text-2xl bg-yellow rounded-full py-2 font-medium hover:bg-slate-200 transition min-w-full">
              CONOCE MÁS
              <img 
                src={RAY_DARK}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

      </section>
    </section>
  );
}

export default VideoSection;
