[![npm version](https://badge.fury.io/js/nz-tslint-rules.svg)](https://badge.fury.io/js/nz-tslint-rules)
[![Downloads](https://img.shields.io/npm/dt/nz-tslint-rules.svg)](https://img.shields.io/npm/dt/nz-tslint-rules.svg)

# NG-ZORRO TSLint

TSLint rules for NG-ZORRO.

# Install

```shell
$ npm i nz-tslint-rules -D
# or
$ yarn add nz-tslint-rules -D
```

## Versions

| NG-ZORRO | TSLint Rules |
| -------- | ------------ |
| 8.x | 0.800.x |

- ng-zorro-antd@8.x => nz-tslint-rules@0.800.x

# Rules

This repository provides the following rules:

| Rule name | Configuration | Description |
| --------- | ------------- | ----------- |
| nz-secondary-entry-imports | none | Updates the import paths to secondary entry point |

## Migration to Secondary Entry

Using the current set of rules allows you to automatically migrate your project which uses primary entry to secondary entry.

```ts
// Before
import {
  NzAutocompleteModule,
  NzButtonModule,
  NzCardModule,
  NzTableModule,
  NzToolTipModule
} from 'ng-zorro-antd';

import { NzNoAnimationModule  } from 'ng-zorro-antd';

// After
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNoAnimationModule } from 'ng-zorro-antd/core';
```

*Note: * This rule does not applicable if you use `import { NgZorroAntdModule } from 'ng-zorro-antd'`.

# Use

Add this rule set in your `tslint.json` file.

```json
{
  "rulesDirectory": [
    "node_modules/nz-tslint-rules"
  ],
  "rules": {
    "nz-secondary-entry-imports": true
  }
}
```

# License

MIT
