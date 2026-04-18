# @nameer/typescript-package

Template for developing NPM packages written in TypeScript with support for CommonJS and ES Modules.

## For Package Consumers

If you're using this as a published package, install it via:

```bash
npm install @nameer/typescript-package
# or
yarn add @nameer/typescript-package
```

### Usage

This package supports both CommonJS and ES Modules out of the box.

**ESM**

```js
import * as pkg from "@nameer/typescript-package";
```

**CommonJS**

```js
const pkg = require("@nameer/typescript-package");
```

## For Template Users

If you're using this as a starting point for your own package, clone and set it up:

```bash
# Clone project
git clone https://github.com/nameer-rizvi/typescript-package.git

# Change into project
cd typescript-package

# Install dependencies
yarn install
```

### Development

```bash
# Build CJS and ESM outputs
yarn build

# Lint source files
yarn lint

# Auto-fix lint errors
yarn lint:fix

# Test both CJS and ESM outputs
yarn test
```

## License

MIT
