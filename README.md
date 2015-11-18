string-form-utils
===========================

## Bower Install

```sh
bower install string-form-utils
```

## Npm Install

```sh
npm install string-form-utils
```

## Usage

```js
var stringFormUtils = require('stringFormUtils');

//output `ａ`
console.log(stringFormUtils.transformToFullwidth("a"));

//output `a`
console.log(stringFormUtils.transformToHalfwidth("ａ"));
```

## Build

```sh
gulp
```

## Test

```sh
gulp test
```

