import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGViMzljOTBhNWNmYWQxYmM4YzVmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzk0MDk4OCwiZXhwIjoxNzA0MjAwMTg4fQ.0R0t_BYF6oHODkPqsuAbfG2BAPQjVfLoeiodbSuB1Ks";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
