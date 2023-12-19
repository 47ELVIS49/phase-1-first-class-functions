// 1. receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // 2. returnsANamedFunction
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      console.log("This is a named function!");
    };
  }
  
  // 3. returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      console.log("This is an anonymous function!");
    };
  }
  
  // Example usage
  const callbackFunction = () => console.log("Callback function executed!");
  
  // Test the receivesAFunction function
  receivesAFunction(callbackFunction);
  
  // Test the returnsANamedFunction function
  const namedFunction = returnsANamedFunction();
  namedFunction();
  
  // Test the returnsAnAnonymousFunction function
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction();
  