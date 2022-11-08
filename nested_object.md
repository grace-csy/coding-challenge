## Nested Object

### Description
Given a nested JS object, please implement a function that does the following transformations:

* Increment each integer within the Object `eg: { x: 9 } => { x: 10 }`
* Concatenate `AI` to each String within the Object `eg: { y: 'hero' } => { y: 'hero AI' }`
* The object may contain arrays and nested objects, but the only primitive data types will be integers and strings.

### Input
The input is an arbitrarily nested JS object.

### Output
Output a nested JS object with the applied transformations.

### Test Cases
```
// Sample Input
{
  a: 123,
  b: 'hero'
  c: [1, 2, 3]
  d: {
    e: 3
    f: ['abc', 'def']
  }
}

// Resulting Output
{
  a: 124,
  b: 'hero AI'
  c: [2, 3, 4]
  d: {
    e: 4
    f: ['abc AI', 'def AI']
  }
}
```

### Task Details
Please write your solution in a javscript or typescript file with the filename `nested_object` and the appropriate extension.

Here is some template code to get you started:
```javascript
const transformValue = obj => {
  // Write your solution here. You can create any number of helper functions
  
};
```
