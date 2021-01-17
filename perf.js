const bench = require('nanobench');
const template = require('.');

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

const RUNS = 200000; // 200 000

bench(`template ${RUNS} times`, (b) => {
    b.start();

    for (let i = 0; i < RUNS; i++) {
        template(html, replacements);
    }

    b.end();
});
