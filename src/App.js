import { lazy, Suspense } from "react";
// import Book from "./book";
const Book = lazy(() => import("./book"));
function App() {
  return (
    <div>
      <h1>WELCOME</h1>
      <h2>Book List</h2>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Book />
      </Suspense>
    </div>
  );
}

export default App;
