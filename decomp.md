## Decomp ReactJS

### Description
In this section of the assessment, we will provide you with some code snippets and ask you to answer some questions about the code. 

Please keep your answers to a reasonable length. You may answer directly in this markdown file.

### Q1. ReactJS Hooks
Please take a look at this ReactJS code and correct the mistakes that you find. You may edit the code in this markdown file directly.
```javascript
import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <p>Current count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>Increment count</button>
    </>
  );
}
```

### Q2. Events
Explain the difference between these 4 ways of passing a function to a component. </br>
What will happen when you click each of these buttons and why?

```javascript
class App extends React.Component {
  
  constructor() {
    super(); 
    this.name = 'MyComponent';
    
    this.handleClick2 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    alert(this.name);
  }
  
  handleClick3 = () => alert(this.name);
  
  render() {
    return (
      <div>
        // Result: An alert will be prompted whenever the component is rendered, but no response with clicks.
        // Reason: The function is already called when passing it to the component.
        <button onClick={this.handleClick1()}>click 1</button> 
        
        // Result: An error will be shown when clicking the button.
        // Reason: "this" is undefined without binding the function.
        <button onClick={this.handleClick1}>click 2</button>
        
        // Result: An alert will be prompted whenever the button is clicked.
        // Reason: Since the handleClick1 function is bound and is assigned to handleClick2, the handleClick1 will be executed successfully.
        <button onClick={this.handleClick2}>click 3</button>
        
        // Result: An alert will be prompted whenever the button is clicked.
        // Reason: "this" is alreay bound to the function when arrow function is used.
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
```

### Q3. Memoization
Memoized selectors are a common pattern in ReactJS applications to serve cached data derived from a global state. 

In the following code snippets, we have implemented two memoized selectors that will re-evaluate the original function only if the derived output of the input argument is changed. Otherwise, the selector will return a cached result. 

`memoize()` uses a <strong>shallow-compare</strong> function to evaluate equality.

For each assertion test on lines 79 to 86, please indicate whether the test will pass or fail. Provide a brief description if you indicate that an assertion will fail.

```javascript
test('memoized selectors', () => {
  const stateA = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateB = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateC = { data: { a: { x: 1, y: [3, 4] }, b: { x: 3, y: [5, 6] } } };

  const fn1 = memoize((st: typeof stateA) =>
    Object.values(st.data).map(d => d.x)
  );

  const fn2 = memoize((st: typeof stateA) =>
    Object.values(st.data).map(d => d.y)
  );
  
  // Result: fail
  // Reason: Although the output from fn1(stateA) and fn1(stateB) are both [2,3], 
  //         they are not refering to the same array because the map function 
  //         returns a new array. Therefore, when comparing the outputs with the 
  //         strict equality operator, the result is falsy.
  expect(fn1(stateA) === fn1(stateB)).toBeTruthy();
  
  // Result: fail
  // Reason: The outputs from fn1(stateA) and fn1(stateC) are [2,3] and [1,3] 
  //         respectively, the difference in values leads to a falsy result
  expect(fn1(stateA) === fn1(stateC)).toBeTruthy();
  
  // Result: pass
  expect(fn1(stateB) !== fn1(stateC)).toBeTruthy();
  
  // Result: fail
  // Reason: Although the both inputs are stateA, after passing into the map
  //         function, a new array is returned. Thus, even the output values are
  //         the same, they are not referencing the same array.
  expect(fn2(stateA) === fn2(stateA)).toBeTruthy();
  
  
  // Result: fail
  // Reason: Although the output from fn2(stateA) and fn2(stateB) are both [[1,2],[3,4]], 
  //         they are not refering to the same array because the map function 
  //         returns a new array. Therefore, when comparing the outputs with the 
  //         strict equality operator, the result is falsy.
  expect(fn2(stateA) === fn2(stateB)).toBeTruthy();
  
  // Result: pass
  expect(fn2(stateA) !== fn2(stateC)).toBeTruthy();
  
  // Result: pass
  expect(fn2(stateB) !== fn2(stateC)).toBeTruthy();
});
```
