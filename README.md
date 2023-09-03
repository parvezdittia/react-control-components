# react-control-components

React control components is a small collection of React components that allow for easy conditional rendering and looping/mapping over data arrays.

## Installation

Use the package manager **NPM**, **Yarn** or **PNPM** to install react-control-components.

NPM

```bash
npm install --save react-control-components
```

PNPM

```bash
pnpm add react-control-components
```

Yarn

```bash
yarn add react-control-components
```

## Usage

```javascript
import /* components to import come here */ 'react-control-components';
```

### If

When the expression in the **condition** prop evaluates to truthy, the children of the component get rendered. Can be use standalone or as the first child in the **IfChain** component.

```javascript
import { If } from 'react-control-components';

const App = () => {
  /* 
    Some static or dynamic value. 
    As an example here it is a boolean,
    but it can be any expression that evaluates to
    truthy or falsy value
  */
  const flag = true;

  return (
    <>
      <If condition={flag}>I will be rendered</If>

      <If condition={!flag}>I will not be rendered</If>
    </>
  );
};

export default App;
```

Non boolean values can also be used:

```javascript
import { If } from 'react-control-components';

const App = () => {
  const obj = {};
  const arr = [];
  const undef = undefined;
  const nullValue = null;
  const fn = () => {};
  const str = 'string';
  const emptyStr = '';
  const num = 1;
  const zero = 0;
  const dummyFn = () => true;

  return (
    <>
      <If condition={obj}>
        <div>
          Flag evalutes to true since empty objects always evaluate to true
        </div>
      </If>

      <If condition={arr}>
        <div>
          Flag evalutes to true since empty arrays always evaluate to true
        </div>
      </If>

      <If condition={undef}>
        <div>
          Flag evalutes to false since undefined always evaluate to false
        </div>
      </If>

      <If condition={nullValue}>
        <div>Flag evalutes to false since null always evaluate to false</div>
      </If>

      <If condition={fn}>
        <div>Flag evalutes to true since functions always evaluate to true</div>
      </If>

      <If condition={str}>
        <div>
          Flag evalutes to true since non-empty strings always evaluate to true
        </div>
      </If>

      <If condition={emptyStr}>
        <div>
          Flag evalutes to false since empty strings always evaluate to false
        </div>
      </If>

      <If condition={num}>
        <div>
          Flag evalutes to true since non-zero numbers always evaluate to true
        </div>
      </If>

      <If condition={zero}>
        <div>Flag evalutes to false since zero always evaluate to false</div>
      </If>

      <If condition={dummyFn()}>
        <div>Flag evalutes to true since the function returns true</div>
      </If>
    </>
  );
};

export default App;
```

### Else If

Works exactly like <If>, except it is designed to be used within the **IfChain** component.

### Else

This component renders whatever you pass to it as a child. It is meant to be used within the **IfChain** component as the last child.

```javascript
import { Else } from 'react-control-components'

const App = () => {

  return (
    <Else>
        I will always be rendered.
    </Else>
  )

}

export App;
```

### IfChain

This component can be used to _chain_ and _nest_ multiple **If**, **ElseIf** and **Else** components. It is ideal for scenarios where one of a number of possible scenarios might need to be rendered.

```javascript
import { Else, ElseIf, If, IfChain } from 'react-control-components';

const App = () => {
  /* 
    Some static or dynamic values. 
    As an example here they are boolean,
    but they can be any expression that evaluates to
    truthy or falsy values
  */
  const flagA = false;
  const flagB = false;

  return (
    <IfChain>
      <If condition={flagA && flagB}>
        <div>Flag A and B are true</div>
      </If>
      <ElseIf condition={!flagA && flagB}>
        <div>Flag A is false and B is true</div>
      </ElseIf>
      <ElseIf condition={flagA && !flagB}>
        <div>Flag A is true and B is false</div>
      </ElseIf>
      <Else>
        <div>Both flagA and flagB are false</div>
      </Else>
    </IfChain>
  );
};

export default App;
```

### Loop

Loop component is useful to _loop_ over or _map_ your data into React components. The component takes a **source** props which is a JS array. The child prop takes a function which executed for each item in the array.

```javascript
import { Loop } from 'react-control-components';

const App = () => {
  const arr = [
    { name: 'John', age: 20, id: 'abc' },
    { name: 'Jane', age: 30, id: 'xyz' },
    { name: 'Joe', age: 40, id: 'pqr' },
    { name: 'Jack', age: 50, id: 'lmn' },
    { name: 'Jill', age: 60, id: 'stu' },
  ];

  return (
    <ul>
      <Loop source={arr}>
        {({ id, name, age }, index) => (
          <li key={id}>
            <span>Index: {index + 1}</span> <span>Name: {name}</span>{' '}
            <span>Age: {age}</span>
          </li>
        )}
      </Loop>
    </ul>
  );
};

export default App;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
