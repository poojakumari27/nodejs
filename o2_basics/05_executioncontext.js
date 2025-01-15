/*1. Global Execution Context
Definition: This is the default context where the code starts execution. It includes the global object (window in browsers) and the this keyword.

Usage: Variables and functions declared in the global scope are accessible throughout the code.

2. Function Execution Context
Definition: Created whenever a function is called. It includes the function's arguments, local variables, and the this keyword.

Usage: Each function call creates a new execution context, allowing for local scope and recursion.

3. Eval Execution Context
Definition: Created when the eval() function is used to execute code. It has its own scope and can access variables in the scope where eval() is called.

Usage: Generally discouraged due to security and performance concerns, but useful for dynamic code execution.

4. Module Execution Context
Definition: Created when a module is loaded. It includes the module's variables and functions, and the this keyword.

Usage: Helps in organizing code into reusable and maintainable pieces.

5. Block Execution Context (ES6 and later)
Definition: Created for block-scoped variables (let and const) within curly braces {}.

Usage: Allows for block-level scoping, which helps in avoiding variable hoisting issues.

6. Async Function Execution Context
Definition: Created when an async function is called. It includes the function's arguments, local variables, and the this keyword.

Usage: Manages asynchronous code execution using await and async keywords.

7. Arrow Function Execution Context
Definition: Arrow functions do not have their own this context. They inherit this from the enclosing execution context.

Usage: Useful for maintaining the correct this value in callbacks and nested functions.


1. Memory Creation Phase (also known as the "Creation Phase")
Definition: This phase occurs before the actual execution of the code. During this phase, the JavaScript engine allocates memory for variables and functions.

Key Actions:

Variable Hoisting: All variable declarations (using var, let, and const) are hoisted to the top of their scope. However, only var variables are initialized with undefined, while let and const remain uninitialized.

Function Hoisting: Function declarations are also hoisted to the top of their scope and are fully initialized.

Global Object Creation: In the global context, the global object (e.g., window in browsers) is created, and the this keyword is set to refer to this global object.

2. Execution Phase
Definition: This phase follows the memory creation phase and involves the actual execution of the code line by line.

Key Actions:

Code Execution: The JavaScript engine executes the code line by line, using the memory allocated during the creation phase.

Variable Assignment: Variables are assigned their values during this phase.

Function Invocation: Functions are invoked, and their execution contexts are created and pushed onto the call stack.

Scope Chain: The scope chain is established, allowing the engine to resolve variable references by looking up the scope chain.*/