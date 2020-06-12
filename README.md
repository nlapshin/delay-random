# delay-random

> Delay a promise a random amount of time set in the interval


## Install

```
$ npm i delay-random
```

## Usage

```js
const delayRandom = require('delay-random');

(async () => {
  const milliseconds = await delayRandom(1000, 1500);

  // Random integer value between numbers 1000 and 1500
  console.log(milliseconds)
})();
```

## API

### delay(minMilliseconds, maxMilliseconds)

Create a promise which resolves after the random set in the interval `milliseconds`.

#### minMilliseconds

Type: `number`

Starting range specified in milliseconds.

####  maxMilliseconds

Type: `number`

Ending range specified in milliseconds.

## License

MIT © [Nikolay Lapshin](https://nlapshin.com)