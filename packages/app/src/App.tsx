import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Movies = lazy(() => import("movies/Movies"));
const Button = lazy(() => import("elements/Button"));

export default function App() {
  return (
    <div className="flex-col min-h-screen min-w-screen">
      <header className="flex flex-row w-full subpixel-antialiased bg-blue-500">
        <nav className="flex items-center p-6 text-white">
          <div className="flex items-center mr-6 text-white flex-no-shrink">
            <Link className="text-xl tracking-tight text-white" to="/">
              App
            </Link>
          </div>
          <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
            <Link
              className="block mr-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white"
              to="/movies"
            >
              Movies
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col flex-auto">
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="movies/*" element={<Movies />} />
          </Routes>
        </Suspense>
        <Link to="/movies">Go to movies</Link>
        <Button className="w-64">Click me</Button>
        <Button>Click me</Button>
      </main>
      <footer className="w-full p-6" />
    </div>
  );
}
