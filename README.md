# Pattern: link

Links are used primarily as a navigational element. Links may also change what or how data is displayed (view more, show all). If the action taken by the user will change or manipulate data, use a button.

## What is it?

An anchor element (`a`).

```
<a href="#" class="bx--link">Link</a>
```

## npm scripts

* `npm run lint` - lints Javascript
* `npm run ava` - runs unit tests
* `npm run nyc` - runs unit tests, then runs code coverage
* `npm test` - runs `npm pretest` first, which runs the linting, then ava, then nyc
