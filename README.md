## Athena's personal website (athenawhoa.com)

The source code for Athena Lo's personal website. Designed by Athena Lo [@AthenaLo](https://github.com/AthenaLo), built by Kairui Wang [@kairuiwang](https://github.com/kairuiwang).

## Deploy

This repo is kept in a deployable state -- all assets and templates have been compiled and their
output is version controlled.

This means, certain files are for production use, and changing them in development is **not**
recommended. Namely, any `.html` files in the base directory, and anything in the `css/` 
subdirectory. They represent the compiled HTML and CSS, respectively.

## Development

In order to develop the website, you will need to get `npm` (Node Package Manager) somehow.
On OSX, you can do something like `brew install npm`.

After you get `npm`, you need to install the dependencies by running the command

```
npm install
```

This will install a bunch of dependencies. Some of them are used by the website itself, such as
`skeleton-css` and `font-awesome`. Other dependencies, such as `gulp`, are tools that streamline
the build process.

A build process is essentially a pipeline that takes code written in environments that we
prefer, such as any HTML templating frameworks (we use Handlebars), SASS, and compiles them down
to `.html` and `.css` files that browsers can understand. The tasks we defined in `gulpfile.js`
contains our build pipeline, and makes development and release a breeze.

Before you edit the Handlebars or SASS files, you can have `gulp` automatically track your 
changes and recompile any changes you make dynamically, so you can test any changes you make
locally. To have `gulp` watch for changes and run the build process dynamically, simply run

```
gulp &
```

(The `&` makes `gulp` a background job -- and enables you to continue using the same shell
session). Just running `gulp` is cool too, but you might need to launch a new shell after that.
