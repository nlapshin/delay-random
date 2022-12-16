declare module 'delay-random' {
  function delayRandom(minMilliseconds: number, maxMilliseconds: number): Promise<any>

  export = delayRandom
}
