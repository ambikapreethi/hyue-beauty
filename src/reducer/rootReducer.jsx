import { combineReducers } from "redux";
import HyueLipstickSlice from "./hyueLipstickSlice";
import hyueNailpolishSlice from "./hyueNailpolishSlice";

const rootReducer=combineReducers(
    {
        hyueLipstick: HyueLipstickSlice,
        hyueNailpolish: hyueNailpolishSlice
    }
)

export default rootReducer;