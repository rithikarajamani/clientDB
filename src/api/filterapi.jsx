import axios from "axios";

async function filterApi(filterData) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/Clientdemotracker/filter",
      {
        Company: filterData.companyName // Assuming the field in the API is "Company"
      }
    );

    if (response.status === 200) {
      console.log(response);
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error filtering data:", error);
    return false;
  }
}

export default filterApi;
