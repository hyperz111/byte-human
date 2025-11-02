# byte-human

Convert byte size to human-readable size

## Install

```sh
$ npm install byte-human
```

## Usage

```js
import byteHuman from "byte-human";

byteHuman(2324606976); // => 2.32 GB
```

## API

### `byteHuman(bytes, opts?)`

Return: `string`

Convert byte size to human-readable size.

#### `bytes`

Type: `number`

#### `opts?`

Type: `Object`

Options you can configure.

##### `separator?`

Type: `string | undefined`

Separator between number and unit, default is space.

```js
import byteHuman from "byte-human";

byteHuman(2324606976); // => 2.32 GB

byteHuman(2324606976, { separator: "_" }); // => 2.32_GB
```

##### `fixed?`

Type: `number | undefined`

For `Number#toFixed`, default is `2`.

```js
import byteHuman from "byte-human";

byteHuman(2324606976); // => 2.32 GB

byteHuman(2324606976, { fixed: 1 }); // => 2.3 GB
```

## Copyright

Copyright © 2025-Present [Hyper-Z11](https://github.com/hyperz111/). Licensed under [ISC License](https://www.isc.org/licenses/).
