import RAY_DARK from "../../assets/img/ray_day.png";

function VideoSection() {
  return (
    <section className="h-[742px] relative ">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute"
      >
        <source
          src="https://res.cloudinary.com/dgfkry5fw/video/upload/v1725319178/6388397-uhd_3840_2160_25fps_gogmcc.mp4"
          type="video/mp4"
        />
      </video>

      <div className="max-w-7xl mx-auto flex items-end justify-end h-full">
        <div className="w-full relative">
          <section className="absolute bottom-16 left-1/2 sm:left-9 lg:left-24 transform -translate-x-1/2 sm:transform-none">
            <div className="relative flex flex-col gap-4 text-black">
              <hr className="w-[55%] border-[2px] border-yellow rounded-full" />
              <h1 className="w-64 sm:w-auto  sm:text-left text-left text-4xl lg:text-5xl text-white mb-2">
                HARD ROCK GAME.
                <br />
                TIME TO CHANGE
              </h1>
              <div className="mx-auto sm:m-0 w-full flex items-center justify-center">
                <button className="flex gap-3 items-center justify-center text-xl sm:text-2xl bg-yellow rounded-full py-2 font-medium hover:bg-slate-200 transition min-w-full">
                  CONOCE MÁS
                  <img src={RAY_DARK} width={20} height={20} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
