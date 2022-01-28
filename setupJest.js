expect.extend({
    toContainText(received, expected) {
      const r = received.replace(/([\W]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x=>!!x).join(" ").replace(/ , /g, ',')
      const e = expected.replace(/([\W]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x=>!!x).join(" ").replace(/ , /g, ',')
      return r === e
        ? {
            pass: true,
            message(){  return `Expected ${r} contains ${e}` }
        }
        : {
            pass: false,
            message(){ return `Expected ${r} should contain ${e}`}
        };
    },
  });