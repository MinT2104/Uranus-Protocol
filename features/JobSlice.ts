import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Network, NetworkId } from "@near-wallet-selector/core";
import { RootState } from "@/context/store";

const initialState = {
  job_id: "",
  dev_account: "",
  name_job: "",
  job_creators: "",
  status: "",
  token_amount: NaN,
  description: "",
  success: false,
};

export const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    getJobInfo: (state, action: any) => {
      return (state = { ...action.payload });
    },
  },
});

export const { getJobInfo } = JobSlice.actions;
export default JobSlice.reducer;
