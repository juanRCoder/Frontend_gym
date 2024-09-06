function VideoSection() {
  const thunderLogo = (
    <svg
      width="29"
      height="33"
      viewBox="0 0 29 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6527 0.0961254C17.2941 0.330584 17.7222 0.952674 17.7222 1.65008V11.55H27.3889C28.0114 11.55 28.5782 11.9173 28.8448 12.4934C29.1114 13.0696 29.03 13.7514 28.6358 14.2449L14.1358 32.3948C13.7046 32.9345 12.9886 33.1383 12.3473 32.9039C11.7059 32.6694 11.2778 32.0473 11.2778 31.3499V21.45H1.61113C0.988611 21.45 0.421796 21.0827 0.155216 20.5066C-0.111364 19.9304 -0.0300036 19.2486 0.364197 18.7551L14.8642 0.605243C15.2954 0.0654812 16.0114 -0.138333 16.6527 0.0961254ZM5.01096 18.15H12.8889C13.7787 18.15 14.5 18.8887 14.5 19.8V26.7276L23.989 14.85H16.1111C15.2213 14.85 14.5 14.1113 14.5 13.2V6.27238L5.01096 18.15Z"
        fill="black"
      />
    </svg>
  );

  return (
    <section className="min-h-40 lg:h-screen relative">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source
          src="https://res.cloudinary.com/dgfkry5fw/video/upload/v1725319178/6388397-uhd_3840_2160_25fps_gogmcc.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute bottom-0 mb-8 lg:mb-36 xl:mb-48 left-10 lg:left-16 xl:left-36 flex flex-col gap-4 p-2 w-44 md:w-60 lg:w-72 xl:w-96">
        <hr className="w-1/2 border-2 border-yellow rounded-full" />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium uppercase text-white xl:leading-tight">
          Hard Rock Game. Time to Change
        </h1>
        <button className="text-sm flex items-center justify-center gap-2 sm:text-md md:text-lg lg:text-xl xl:text-3xl font-medium bg-yellow rounded-full uppercase px-2 py-1 lg:p-2 w-28 sm:w-32 md:w-44 lg:w-72 xl:w-full hover:bg-white transition-all duration-300 ease-in-out">
          Conoce más {thunderLogo}
        </button>
      </div>
    </section>
  );
}

export default VideoSection;