## Barcode Generator

This is a simple online barcode generator based on the [BWIP-JS](https://github.com/metafloor/bwip-js) package. Visit the package page to view supported barcode types.

### Usage

The generator will output the barcode in PNG format. To use it inside your view:

```<img src="http://localhost:8080/barcode/generate?type=code128&text=barcode" alt="Barcode">```

### Available Parameters

* type - barcode type (required). eg: **type=code128**
* text - string that want to be converted (required)
* includetext - show the string beneath the barcode (optional). By default it is true. eg: **includetext=false**
* height - bars height. eg: **height=5**
* scale - barcode scale. eg: **scale=3**
