# JDita ![Version 0.1.0](https://img.shields.io/badge/version-0.1.0-blue) ![Coverage Status](https://img.shields.io/badge/coverage-94%25-grassgreen)

This tool generates JDita (JSON representation of LwDita) from XDita files

---
## Requirements

For development, you will only need Node.js and a node package manager, like Yarn, to be installed in your environement.

## Usage

You can add JDita to your project using `npm` or `yarn`

```bash
npm install --save jdita
```
or
```bash
yarn add jdita
```

```javascript
const { xditaToJson } = require("jdita");

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic PUBLIC "-//OASIS//DTD LIGHTWEIGHT DITA Topic//EN" "lw-topic.dtd">
<topic>...</topic>
`
xditaToJson(xml)
  .then(JDitaDocument => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.log('Failed to convert:', error));
```

By default, `xditaToJson` will fail when it encounters any error (XML syntax errors, validation errors,...).
If you want to ignore any errors and work with whatever data the function could collect, set the second argument `abortOnError` to `false`:

```javascript
xditaToJson(xml, false)
```