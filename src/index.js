const cities = ["Guayaquil", "Lima", "Mexico", "Bogota", "Buenos Aires"];

const randomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
