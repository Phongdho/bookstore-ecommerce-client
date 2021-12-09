import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWM4MjgzMWU0OTg3ZTQxZWEwYjZhMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTAyNTI2OCwiZXhwIjoxNjM5MTExNjY4fQ.j2Qg1MUKToN4MnX_PwXnxOl6dZpK-f8LiTRWbx9jyMQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});