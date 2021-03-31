import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Movies = lazy(() => import("movies/Movies"));

export default function App() {
  return (
    <div className="flex-col min-h-screen min-w-screen">
      <header className="flex w-full flex-row subpixel-antialiased bg-blue-500">
        <nav className="flex items-center p-6 text-white">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <Link className="tracking-tight text-xl text-white" to="/">
              App
            </Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <Link
              className="block lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4"
              to="/movies"
            >
              Movies
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-auto flex-col">
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="movies/*" element={<Movies />} />
          </Routes>
        </Suspense>
        <Link to="/movies">Go to movies</Link>
      </main>
      <footer className="w-full p-6" />
    </div>
  );
}
