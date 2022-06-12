const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (respon) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((response) => {
      const [ixx, cgv] = response;
      return [...ixx, ...cgv].filter((item) => item.hasil === respon).length;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  promiseOutput,
};
