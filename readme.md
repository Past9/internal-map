#internal-map

---

ES6 currently has no built-in way to create private class members. One way to simulate them is to use a ```WeakMap```. ```internal-map``` does this for you. Use it like so:


```
// ES6 class module
"use strict";

let internal = require("internal")();

class MyClass {

    constructor(privateData) {
        internal(this).privateData = privateData;
    }

    printPrivateData() {
        console.log("Private data:", internal(this).privateData);
    }

}


var myInstance = new MyClass("Can't touch this!");

myInstance.printPrivateData();  // Prints "Private data: Can't touch this!"

console.log(typeof myInstance.privateData === "undefined");  // Prints "true"

```
