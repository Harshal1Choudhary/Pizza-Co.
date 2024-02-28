// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

import { createSlice } from '@reduxjs/toolkit';

// async function fetchAddress() {
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   return { position, address };
// }

// const initialState = {
//   username: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateName(state, action) {
//       //State here is current state and action is the object we are recieving which will help us update states
//       state.username = action.payload;
//       //action.payload is the new username we getting and setting it in state.username
//     },
//   },
// });

// export const { updateName } = userSlice.actions; //ye dega apn ko action function ka access toh is updateName action se apn update karenge Name ko

// export default userSlice.reducer;

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions; //update name is action creator automatically created by createSlice function
export default userSlice.reducer;
