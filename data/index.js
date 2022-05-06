const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore(colorReducer);

export default store;
