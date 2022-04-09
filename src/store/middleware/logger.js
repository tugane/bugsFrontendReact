// SNA
const logger = (params) => (store) => (next) => (action) => {
  console.log("Loggin", params);
  next(action);
};

export default logger;
