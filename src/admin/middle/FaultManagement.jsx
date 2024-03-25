// import React, { useState } from 'react';
// import './FaultManagement.css';

// function FaultManagement() {
//   const [faults, setFaults] = useState([
//     { id: 1, name: 'Fault 1', option1: '', option2: '', option3: '' },
//     { id: 2, name: 'Fault 2', option1: '', option2: '', option3: '' },
//     { id: 3, name: 'Fault 3', option1: '', option2: '', option3: '' },
//   ]);

//   const handleInputChange = (id, field, value) => {
//     setFaults((prevFaults) =>
//       prevFaults.map((fault) =>
//         fault.id === id ? { ...fault, [field]: value } : fault
//       )
//     );
//   };

//   const handleSave = () => {
//     // Implement save functionality here
//     console.log('Faults saved:', faults);
//   };

//   return (
//     <div className="fault-management-container">
//       {/* Left Sidebar */}
//       <div className="left-sidebar">
//         {/* Add any left sidebar content here */}
//       </div>

//       {/* Middle Content */}
//       <div className="fault-management-content">
//         <h2>Fault Management</h2>
//         {faults.map((fault) => (
//           <div key={fault.id} className="fault-item">
//             <h3>{fault.name}</h3>
//             <form className="fault-form">
//               <label>Fault:</label>
//               <input type="text" value={fault.name} readOnly />
//               <br />
//               <label>Option 1:</label>
//               <input
//                 type="text"
//                 value={fault.option1}
//                 onChange={(e) => handleInputChange(fault.id, 'option1', e.target.value)}
//               />
//               <br />
//               <label>Option 2:</label>
//               <input
//                 type="text"
//                 value={fault.option2}
//                 onChange={(e) => handleInputChange(fault.id, 'option2', e.target.value)}
//               />
//               <br />
//               <label>Option 3:</label>
//               <input
//                 type="text"
//                 value={fault.option3}
//                 onChange={(e) => handleInputChange(fault.id, 'option3', e.target.value)}
//               />
//             </form>
//           </div>
//         ))}
//         <div>
//           <button className="save-button" onClick={handleSave}>
//             Save
//           </button>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="right-sidebar">
//         {/* Add any right sidebar content here */}
//       </div>
//     </div>
//   );
// }

// export default FaultManagement;
