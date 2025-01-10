import { createSlice } from "@reduxjs/toolkit";
import {getStagiaires,createStagiaire,updateStagiaire,deleteStagiaire} from "./ActionThunk";

const stagiaireSlice = createSlice({
  name: "stagiaires",
  initialState: {
    list: [],
    loading: false,
    error: null,
    modifie: false,
    search: "",
  },
  reducers: {
    rechercher: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStagiaires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStagiaires.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getStagiaires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      ///createStagiaire
      .addCase(createStagiaire.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.modifie = false;
      })
      .addCase(createStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.modifie = true;
      })
      .addCase(createStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.modifie = false;
      })

      ///updateStagiaire
      .addCase(updateStagiaire.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.modifie = false;
      })
      .addCase(updateStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.modifie = true;
      })
      .addCase(updateStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.modifie = false;
      })
      ////deleteStagiaire
      .addCase(deleteStagiaire.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.modifie = false;
      })
      .addCase(deleteStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.modifie = true;
      })
      .addCase(deleteStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.modifie = false;
      });
  },
});
export default stagiaireSlice.reducer;
export const { rechercher } = stagiaireSlice.actions;
