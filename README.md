# rogu
Simple, easy-to-import console.log that returns its value

## Usage

```javascript
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import rogu from 'rogu';
import toUpper from 'lodash/fp/toUpper';

const letters = ['a', 'b', 'c'];

const exclaim = s => `${s}!`;

const transform = compose(
  rogu('After exclaim:'), // Logs "After exclaim: ['A!', 'B!', 'C!']"
  map(exclaim),
  rogu('After toUpper:'), // Logs "After toUpper: ['A', 'B', 'C']"
  map(toUpper),
);

const result = transform(letters);
// result === ['A!', 'B!', 'C!'];
```
