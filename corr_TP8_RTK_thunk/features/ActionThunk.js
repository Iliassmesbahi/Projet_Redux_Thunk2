import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStagiaires = createAsyncThunk("stagiaires/get", async () => {
  return axios.get("http://localhost:5000/stagiaires").then((response) => response.data);
});
export const createStagiaire = createAsyncThunk("stagiaires/create",async (stg) => {
    const response = await axios.post("http://localhost:5000/stagiaires", stg);
    return response.data;
  }
);
export const updateStagiaire = createAsyncThunk("stagiaires/update",async (stg) => {
    const response = await axios.put(`http://localhost:5000/stagiaires/${stg.id}`,stg);
    return response.data;
  }
);

export const deleteStagiaire = createAsyncThunk("stagiaires/delete",async (id) => {
    const response = await axios.delete(`http://localhost:5000/stagiaires/${id}`);
    return response.data;
  }
);
