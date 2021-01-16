<div align="center">
  <img src="y8.png" alt="yate" />
</div>

<h1 align="center">Yet Another Templating Engine [YATE [Y8]]</h1>

<div align="center">
  <a href="https://npmjs.org/package/y8">
    <img src="https://badgen.now.sh/npm/v/y8" alt="version" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=y8">
    <img src="https://packagephobia.now.sh/badge?p=y8" alt="install size" />
  </a>
</div>

<div align="center">
  A tiny (~700B) templating engine, such as many others, however, this is just wow. Amaze.
</div>

### The classic selling points

-   👌 Isomorphic, which means it works in both the server, and the client.
-   🔥 Fast enough.
-   🦶 Small enough.
-   🤩 Simply the best itsy bitsy template engine ever made.

### Installation

```
$ npm i --save y8
```

## Usage

```js
const template = require('y8');

const html = `
<html>
    <title>{{hello}}</title>
    <body>
        <h1>{{hello}}</h1>
        <ul>
            <li>{{tasks.one}}</li>
            <li>{{tasks.two}}</li>
            <li>{{tasks.three}}</li>
        <ul>

        <footer>
            <p>Made in {{madeIn}} by {{author}}<p>
        </footer>
    </body>
</html>
`;

const replacements = {
    hello: 'Hello, World',
    tasks: {
        one: 'This is task one',
        two: 'This is task two',
        three: 'This is task three',
    },
    madeIn: 'Norway',
    author: 'Bjarne Oeverli',
};

template(html, replacements);

/*
<html>
    <title>Hello, World</title>
    <body>
        <h1>Hello, World</h1>
        <ul>
            <li>This is task one</li>
            <li>This is task two</li>
            <li>This is task three</li>
        <ul>

        <footer>
            <p>Made in Norway by Bjarne Oeverli<p>
        </footer>
    </body>
</html>
*/
```

## License

MIT - © Bjarne Oeverli - See LICENSE
