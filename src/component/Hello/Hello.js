// Below is ES2015 (ES6)
import React, { Component } from 'react';

// Below is React
// React is a freamwork, a collection of libraries.
// Or, React is a large library, which is similar to Processing.
export class Hello extends Component {
    render() {
        return (
            <div>
                Hello, React!
            </div>
        )
    }
}

// ES6 import and export
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// 1. import/export default
//   1.1 callee.js
//     const sayHi = () => { console.log('hi'); };
//     export default sayHi;
//   1.2 caller.js
//     import whatever from 'callee.js';
//     whatever();

// 2. naming import/export
//   2.1 callee.js
//     const sayHi = () => { console.log('hi'); };
//     ...
//     export { sayHi, ... };
//   2.2 caller.js
//     import { sayHi } from 'callee.js';
//     sayHi();