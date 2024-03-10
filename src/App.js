// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./Layout/Header";
// import Home from "./Pages/Home";
// import Practice from "./Pages/Practice";
// import Services from "./Pages/Services";
// import Attorneys from "./Pages/Attorneys";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/attorneys" element={<Attorneys />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import Services from "./Pages/Services";
import Attorneys from "./Pages/Attorneys";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    // <switch>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/services" element={<Services />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    // </switch>
  );
}

export default App;
