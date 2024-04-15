// import React from "react";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { FontProvider } from "./components/fonts/fontContext";
// import Login from "./components/login/login";
// import Table from "./components/table/table";
// import Header from "./components/header/header";
// import Dashboard from "./components/dashboard/dashboard";

// function App() {
//   return (
//     <>
//       <FontProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Navigate to="/login"></Navigate>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/table" element={<Header />} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//           </Routes>
//         </Router>

       
//       </FontProvider>
//     </>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FontProvider } from "./components/fonts/fontContext";
import Login from "./components/login/login";
import Table from "./components/table/table";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <>
      <FontProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login"></Navigate>} />
            <Route path="/login" element={<Login />} />
            <Route path="/table" element={<Header />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </Router>

        {/* <div className="App">
          <Login></Login>
          {/* <Table /> */}
        {/* </div>  */}
      </FontProvider>
    </>
  );
}

export default App;