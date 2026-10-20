import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

// two routes: refreshing on /test proves the 404.html
// fallback works, same as the redesign needs
export default function App() {
  return (
    <BrowserRouter basename="/wise-main">
      <nav style={{display: "flex", gap: 12, padding: 16}}>
        <Link to="/">Home</Link>
        <Link to="/test">Test page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>home works</h1>} />
        <Route path="/test" element={<h1>test page works</h1>} />
        <Route path="*" element={<h1>home works</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
