// import React, { useState } from 'react';
// import { useState } from 'react';
// function ViewRemarks() {
//     const [data,setData]=useState(null);
//     useEffect(() => {
//         const fetchData = async ({getRemarkId}) => {
//           try {
//             const response = await Axios.get(
//               `http://localhost:8090/login/viewClients/viewRemark?_id=${getRemarkId}`,
//               {
//                 params: {
//                   "_id":getRemarkId
//                 }
//               }
//             );
//             setData(response.data);
//             console.log("response", response.data);
//           } catch (error) {
//             console.error("Error fetching data:", error);
//           }
//         };
//         fetchData();
//       }, [getRemarkId]);
//     return ( 
//         <div>

//         </div>
//      );
// }

// export default ViewRemarks;
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ViewRemarks({getRemarkId}) {
    const [data, setData] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(
                    `http://localhost:8090/login/viewClients/viewRemark`,
                    {
                        params: {
                            _id: getRemarkId
                        }
                    }
                );
                setData(response.data);
                console.log("response", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (getRemarkId) {
            fetchData();
        }
    }, [getRemarkId]);

    return (
        <div>
            {/* Display your fetched data here */}
        </div>
    );
}

export default ViewRemarks;
