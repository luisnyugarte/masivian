import axios from 'axios';

export default {
    GET_COMICS(_context, randomNumber) {
      return new Promise((resolve, reject) => {
        axios.get(`https://xkcd.com/${randomNumber}/info.0.json`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
};