import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import logger from "./middleware/logger";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        // .concat(logger({ destination: "console" }))
        .concat(api),
  });
}
