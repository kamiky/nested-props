# nestedProps
This package allow you to loop asynchronously over an array or object, step by step, similar to the async.eachSeries package.

## Install
``` npm install nestedProps--save ```

## Example
```
var nested = require('nested-props')

var obj = {}
nested.set(obj, 'user.name', 'kamiky')
nested.set(obj, 'user.id', '666')
nested.set(obj, 'user.info.city', 'paris')
nested.set(obj, 'user.info.country', 'france')
/*
{ user:
   { name: 'kamiky',
     id: '666',
     info: { city: 'paris', country: 'france' } } }
*/
nested.set(obj, 'user.id.value', '666')
/*
{ user:
   { name: 'kamiky',
     id: { value: '666' },
     info: { city: 'paris', country: 'france' } } }
*/
nested.set(obj, 'user.id.value', '777')
/*
{ user:
   { name: 'kamiky',
     id: { value: '777' },
     info: { city: 'paris', country: 'france' } } }
*/

var country = nested.get(obj, 'user.info.country')
/*
  france
*/

console.log(obj)

```
