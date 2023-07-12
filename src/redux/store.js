import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rockets/rocketsSlice';
import missionsReducer from './features/missions/missionsSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
