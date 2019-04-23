# DOM JSON Tree
[![Version](https://img.shields.io/badge/dynamic/json.svg?label=version&colorB=5f9ea0&query=$.version&uri=https:%2F%2Fraw.githubusercontent.com%2Ft4y3%2Fdom-json-tree%2Fmaster%2Fpackage.json&prefix=v)](Version)

Visualize the JSON object to the DOM.


## Usage
```js
// import module
import DomJsonTree from 'dom-json-tree';

let djt = new DomJsonTree(json, document.body);
djt.render();
```

### Options
```js
let djt = new DomJsonTree(json, document.body, {
  colors: {
    key: "#008080",
    type: "#546778",
    typeNumber: "#000080",
    typeString: "#dd1144",
    typeBoolean: "#000080"
  }
});
```

## Demo
- https://codesandbox.io/s/82z7w16lw0

## Screenshot
![_users_y41132_scm_github_etc_dom-json-tree_test_index html](https://user-images.githubusercontent.com/9010553/56467655-b18baa80-645c-11e9-8329-295006a1f7ff.png)

## Development

#### Installing
```sh
# Install npm packages
npm i
```

### Running
```sh
# Watch JS & CSS
npm run watch
```
Open "test/index.html" in a browser

#### Library
- [Superfine](https://github.com/jorgebucaran/superfine) - View 

## Deployment
```sh
# Build
npm run build

# Test
npm run test

# Version Up
npm version major|minor|patch

# Publishes a package to the registry
npm publish

# Update master branch
git push origin master

# Push git tags
git push origin --tags
```
