This is a minimal, but fully functional and easily extendable example react project.  You can use it to play around with and learn the basics of react.  Of course, you might want to consult [facebook's tutorial](https://facebook.github.io/react/docs/tutorial.html#your-first-component) while doing so, but keep in mind that **this project's organization does not exactly follow the tutorial**.  If you're looking for the code that *does* follow the tutorial, facebook has it for you [here](https://github.com/reactjs/react-tutorial).

### Installation

```sh
# clone the repo
$ git clone git@github.com:montemishkin/react-hello-world.git
# cd into it
$ cd react-hello-world
# install the dependencies
$ npm install
# build the source (and rebuild on change)
$ gulp watch
```

Open up `index.html` in your browser!


### About the setup

The project uses [gulp](https://github.com/gulpjs/gulp) as a task manager.  You can see the available tasks in the gulpfile.

The source code is bundled using [webpack](https://github.com/petehunt/webpack-howto), which uses [babel](http://babeljs.io/) to transpile the ES6 into browser safe ES5.  Webpack will also run the source through [eslint](http://eslint.org/) to help prevent common errors, as well as to force you into mostly adhering to my coding style.  If you don't like that (its ok, I won't be mad) I recommend that you **only disable the linting rules that bother you stylisticly**.  There are many rules in place that are not purely stylistic, which may save you a headache or two.  

Anyways, to disable a rule, just comment out the relevant line in `config/eslint.json`.  For example, if you don't like being warned when you are using `console.log` then comment out the line `"no-console": 1,`.


### Questions?

Feel free to open up an issue!  And don't be afraid to ask something "stupid".
