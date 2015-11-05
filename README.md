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
console.log(stringFormUtils.transformFullwidth("a"));

//output `a`
console.log(stringFormUtils.transformHalfwidth("ａ"));
```

## Build

```sh
gulp
```

## Test

```sh
gulp test
```

