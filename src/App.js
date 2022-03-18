import { MainPage, Landing, AdminPage } from "./allexports";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return <>
    <Router>
      <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/dashboard" element={<Landing />} />
      <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  </>;
}

export default App;
