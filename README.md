## Getting started

To install the dependencies, type `npm install`. Then, type `npm start` to start a server at localhost:8080 that autocompiles the CSS via [PostCSS](https://github.com/postcss/postcss) with [Preset Env](https://preset-env.cssdb.org/).

NOTE: JavaScript will currently not be transpiled although there are ES6 features in use. Actually, the only ES6 feature used in the JS is the use of
`let` and `const` instead of `var`. This is even supported by IE11.