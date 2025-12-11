import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstname: "",
    lastname: "",
    username: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.username = action.payload.username;
    },
    // logout: (state) => {
    //   state.firstname = "";
    //   state.lastname = "";
    //   state.username = "";
    // },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
