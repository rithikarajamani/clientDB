import axios from 'axios';

async function listApi(offsetVal) {
    try {
        const response = await axios.post(`http://localhost:8090/login/viewClients?status=active?limit=10&offset=${(offsetVal-1)*10}`, {
        });

        if (response.status === 200) {
            console.log(response)       
            return response;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default listApi;
