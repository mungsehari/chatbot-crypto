import axios from "axios";
import React from "react";

const api = axios.create({
  baseURL: "http://localhost:8108",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
