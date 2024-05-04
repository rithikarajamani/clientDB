import React, { useState, useEffect } from "react";
import Axios from "axios";
import RemarksForm from "./remarksForm";

function ViewRemarks({ getRemarkId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8090/login/viewClients/viewRemark`,
          {
            params: {
              _id: getRemarkId,
            },
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
      <RemarksForm data={data} />
    </div>
  );
}

export default ViewRemarks;
