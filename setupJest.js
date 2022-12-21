function tc(received, expected) {
  received = '' + received
  const r = received.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/ , /g, ',').replace(/- /g, '-')
  const e = expected.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/ , /g, ',').replace(/- /g, '-')
  return r === e ?
    {
      pass: true,
      message() {
        return `Expected "${e}" contains "${r}"`
      }
    } :
    {
      pass: false,
      message() {
        return `Received "${r}" should contain "${e}"`
      }
    };
}

expect.extend({
  toContainText(received, expected) {
    /*if (received && typeof received === 'object' && typeof received.then === 'function')
      return received.then(resolved => tc(resolved, expected))
    else*/
      return tc(received, expected)
  },
});