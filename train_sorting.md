## Train Sorting

### Description
Erin is an engineer. She drives trains. She also arranges the cars within each train. She prefers to put the cars in decreasing order of weight, with the heaviest car at the front of the train.

Unfortunately, sorting train cars is not easy. One cannot simply pick up a car and place it somewhere else. It is impractical to insert a car within an existing train. A car may only be added to the beginning and end of the train.

Cars arrive at the train station in a predetermined order. When each car arrives, Erin can add it to the beginning or end of her train, or refuse to add it at all. The resulting train should be as long as possible, but the cars within it must be ordered by weight.

Given the weights of the cars in the order in which they arrive, what is the longest train that Erin can make?

### Input
Please write a function `train_sort(n: int , trains: [int])` that takes as input an integer `0 <= n <= 2000`, the number of cars, 
followed by an array `trains` containing the weight of `n` cars in their natural order of arrival. No two cars have the same weight and 
the weight is a non-negative integer smaller than 10 000.

### Output
Output a single integer giving the number of cars in the longest train that can be made with the given restrictions.

### Test Cases
| Sample Input                        | Sample Output | Explanation                                                 |
| ----------------------------------- | ------------- | ----------------------------------------------------------- |
| `train_sort(3, [1, 2, 3])`          | 3             | `[1, 2, 3]` can be sorted into `[3, 2, 1]`                  |
| `train_sort(5, [10, 2, 12, 20, 3])` | 4             | `[20, 12, 10, 2]` or `[20, 12, 10, 3]` are valid solutions  |

### Task Details
You may write your solution in your preferred programming language. Please name your solution file `train_sorting` with the appropriate file extension.
