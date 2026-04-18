# jsontxt

Read, write, and delete JSON stored in a `.txt` file.

## Installation

```bash
npm install jsontxt
# or
yarn add jsontxt
```

## Usage

```javascript
const jsontxt = require("jsontxt"); // commonjs
// or
import jsontxt from "jsontxt"; // esm
```

### Write

```javascript
jsontxt.write([{ key: "value" }, "item"], { filename: "test" });
// { success: true, error: null }
```

### Read

```javascript
jsontxt.read({ filename: "test" });
// { success: true, error: null, data: [{ key: "value" }, "item"] }
```

### Delete

```javascript
jsontxt.delete({ filename: "test" });
// { success: true, error: null }
```

### File Size

```javascript
jsontxt.filesize({ filename: "test" });
// { b: 1500, kb: 1.5, mb: 0.0015, ..., bytes: "1,500 bytes", kilobytes: "1.5kb", ... }
```

## File Path

The `.txt` file is resolved in the following order:

1. `option.filepath` passed directly to the function
2. `JSONTXT_PATH` environment variable
3. `PWD` environment variable
4. `process.cwd()`

## File Name

The `.txt` filename is resolved in the following order:

1. `option.filename` passed directly to the function
2. `JSONTXT_NAME` environment variable
3. `json_<NODE_ENV>.txt` (e.g. `json_development.txt`)
4. `json.txt`

## Options

All functions accept an optional `FilePathOptions` object:

| Option     | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| `filepath` | `string` | Absolute path to the directory or file      |
| `filename` | `string` | Name of the `.txt` file (without extension) |

## License

MIT
