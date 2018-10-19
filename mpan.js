const split = require('lodash.split');
const sum = require('lodash.sum');
const zip = require('lodash.zip');
const take = require('lodash.take');
const last = require('lodash.last');

const isValid = mpan => {
  const mpanArray = split(mpan, '');
  const res = sum(
    zip([3, 5, 7, 13, 17, 19, 23, 29, 31, 37, 41, 43], take(mpanArray, 12)).map(
      el => {
        const [prime, digit] = el;
        return prime * parseInt(digit);
      }
    )
  );
  return (res % 11) % 10 === parseInt(last(mpanArray));
};

module.exports.isValid = isValid;
