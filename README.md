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
  rogu('exclaim'), // Logs "['A!', 'B!', 'C!']"
  map(exclaim),
  rogu('toUpper'), // Logs "['A', 'B', 'C']"
  map(toUpper),
);

const result = transform(letters);
// result === ['A!', 'B!', 'C!'];
```
