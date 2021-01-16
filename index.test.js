const assert = require('assert');
const template = require('.');

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

const fullyReplaced = `
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
`;


const missingReplacement = `
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
            <p>Made in Norway by undefined<p>
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

describe('y8', function() {
    describe('#template()', function() {
        it('should replace all the placeholders', () => {
            assert.equal(template(html, replacements), fullyReplaced);
        });

        it('should have one undefined replacement', () => {
            delete replacements.author;

            assert.equal(template(html, replacements), missingReplacement);
        });
    });
});