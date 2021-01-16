Yet Another Templating Engine // YATE // Y8
===========

This is a minimal approach to solve the problem, such as many others. However, this is just wow.

### The classic selling points
* 👌 Isomorphic, which means it works in both Node and the frontend
* 🔥 Fast enough
* 🦶 Small footprint 
* 🤩 Simply the best small template engine

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
        three: 'This is task three'
    },
    madeIn: 'Norway',
    author: 'Bjarne Oeverli'
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
MIT - See LICENSE