import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Hello world!
        </h1>
        <p className="text-center text-gray-600">
          This is the content of the app. You can add more content here.
        </p>
      </main>
    </>
  );
}

export default App;
