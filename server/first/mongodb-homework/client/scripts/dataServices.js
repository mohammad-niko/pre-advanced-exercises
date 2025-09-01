const baseURL = "http://localhost:5000/api/members"; // Write down the base URL of the created API.

const getAllUser = async () => {
    try {
        const data = await axios(baseURL)
        console.log(data);
        return data.data.members;
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (userData) => {
try {
    const addUser = await axios.post(baseURL,userData);
    console.log(addUser);
} catch (error) {
    console.log(error);
}
};

const deleteUser = async (id) => {
    try {
        const deleteUser = await axios.delete(`${baseURL}/${id}`);
        console.log(deleteUser);
    } catch (error) {
        console.log(error);
    }
};

export { getAllUser, deleteUser, createUser };
