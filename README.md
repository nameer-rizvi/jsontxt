# jsontxt

Write, read, & delete JSON stored in a .txt file located in the project's root directory.

## Installation

```
$ npm i jsontxt
```

## Usage

Require module:

```javascript
const jsontxt = require("jsontxt");
```

Write json:

```javascript
const json = [{ key: "value" }, "item"];

jsontxt.write(json);

// Writes JSON in a .txt file located in the project's root directory.
```

Read json:

```javascript
const json = jsontxt.read();

console.log(json);

// [{ key: "value" }, "item"] or [] as a fallback.
```

Delete file:

```javascript
jsontxt.delete();

// Removes .txt file.
```

## .txt Path

By default, PWD is the environment variable used to find a project's root directory. If it is null or undefined, or if you'd like to save the .txt file in a different location, you can define an absolute path to host the file using the JSONTXT_PATH environment variable name.

## .txt Name

By default, the name assigned to the .txt file is "json". If you'd like to save the .txt file under a different name, you can define it using the JSONTXT_NAME environment variable name.
