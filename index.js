const delay = require('delay');
const randomInt = require('random-int');

module.exports = (minMilliseconds, maxMilliseconds) => {
  const milliseconds = randomInt(minMilliseconds, maxMilliseconds);

  return delay(milliseconds, { value: milliseconds });
}