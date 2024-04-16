// import React, { useState } from 'react';
// import './sideBar.css'

// const Sidebar = () => {
//   const [isDashboardClicked, setIsDashboardClicked] = useState(false);
//   const [isClientsClicked, setIsClientsClicked] = useState(false);

//   const handleDashboardClick = () => {
//     setIsDashboardClicked(true);
//     setIsClientsClicked(false);
//   };

//   const handleClientsClick = () => {
//     setIsClientsClicked(true);
//     setIsDashboardClicked(false);
//   };

//   return (
//     <div className='sidebar'>
//       <h1 className='title'>Client DB</h1>
//       <div className='menu-container'>
//         <p className='txt'>Main Menu</p>
//         <div className="menu-buttons">
//           <button
//             className={`menu-item ${isDashboardClicked ? 'active' : ''}`}
//             onClick={handleDashboardClick}
//           >
             
//             <img
//               src="./assets/DashboardImg.jpg"
//               alt="Dashboard icon"
//               className="icon icon1"
//             />
//             Dashboard
//           </button>
//           <button
//             className={`menu-item ${isClientsClicked ? 'active' : ''}`}
//             onClick={handleClientsClick}
//           >
            
//             <img
//               src="./assets/Clients.jpg"
//               alt="Clients icon"
//               className="icon icon2"
//             />
//             Clients
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import './sideBar.css'
import { Link,useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const [isClientsClicked, setIsClientsClicked] = useState(false);
  const navigate = useNavigate();
  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setIsClientsClicked(false);
navigate('/dashboard')
  };

  const handleClientsClick = () => {
    setIsClientsClicked(true);
    setIsDashboardClicked(false);
    navigate('/table')
  };

  return (
    <div className='sidebar'>
      <h1 className='title'>Client DB</h1>
      <div className='menu-container'>
        <p className='txt'>Main Menu</p>
        <div className="menu-buttons">
          
          <button
            className={`menu-item ${isDashboardClicked ? 'active' : ''}`}
            onClick={handleDashboardClick} 
          >
            <img
              src="./assets/DashboardImg.jpg"
              alt="Dashboard icon"
              className="icon icon1"
            />
            <Link path="/dashboard"></Link>
            Dashboard
          </button>
          <button
            className={`menu-item ${isClientsClicked ? 'active' : ''}`}
            onClick={handleClientsClick}
          >
            <img
              src="./assets/Clients.jpg"
              alt="Clients icon"
              className="icon icon2"
            />
            Clients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;