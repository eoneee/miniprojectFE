import axios from "axios";

// 데이터 조회
// export const getUsers = async () => {
//     const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
//     return data;
// };

//회원 가입
export const addUsers = async (newUsers) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUsers);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

//로그인
export const loginUsers = async (inUsers) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, inUsers);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

// //삭제
// export const deletePostlist = async (id) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`);
// };