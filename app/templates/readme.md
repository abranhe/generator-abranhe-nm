# <%= repoName %> [![Github](https://github.com/<%= githubUsername %>/<%= repoName %>/workflows/build/badge.svg)](https://github.com/<%= githubUsername %>/<%= repoName %>) [![Travis](https://travis-ci.com/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.com/<%= githubUsername %>/<%= repoName %>) [![License](https://img.shields.io/github/license/<%= githubUsername %>/<%= repoName %>.svg)](https://github.com/<%= githubUsername %>/<%= repoName %>/blob/master/license) [![npm](https://img.shields.io/npm/v/<%= repoName %>.svg?logo=npm)](https://npmjs.org/<%= repoName %>)

> <%= moduleDescription %>

## Install

```
$ npm install <%= moduleName %>
```

<details>
<summary>
  Other options?
</summary>

###### npm

```
$ npm install <%= moduleName %>
```

###### yarn

```
$ yarn add <%= moduleName %>
```

###### Github Registry

```
$ npm install abranhe@<%= moduleName %>
```

</details>

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```

## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>


## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    unicorns & rainbows
    $ <%= repoName %> ponies
    ponies & rainbows
```<% } %>


## License

MIT © [<%= name %>](<%= website %>)
