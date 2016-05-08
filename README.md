## Athena's personal website (athenawhoa.com)

The source code for Athena Lo's personal website. Designed by Athena Lo [@athenawhoa](https://github.com/AthenaLo), built by Kairui Wang [@kairuiwang](https://github.com/kairuiwang).

## Development

You will need to install `npm` the Node Package Manager for development.

The site should work as-is when you clone it. New dependencies can be added with

```
npm install
``` 

To update the CSS, use `sass` to compress your SCSS into an output css file, e.g.

```
sass -t compress css/main.scss css/athenawhoa.css
```

You get access to the `sass` commandline tool through Rubygems (you will need Ruby installed)

```
gem install sass
```
