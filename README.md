# nested-props

This package is an utils to help you define nested properties and values deep inside a javascript object.
See example below.

## Install
``` npm install nested-props --save ```

## Example
```
var nested = require('nested-props')

var obj = {}
nested.set(obj, 'user.name', 'username')
nested.set(obj, 'user.id', '666')
nested.set(obj, 'user.info.city', 'paris')
nested.set(obj, 'user.info.country', 'france')
/*
{ user:
   { name: 'username',
     id: '666',
     info: { city: 'paris', country: 'france' } } }
*/
nested.set(obj, 'user.id.value', '666')
/*
{ user:
   { name: 'username',
     id: { value: '666' },
     info: { city: 'paris', country: 'france' } } }
*/
nested.set(obj, 'user.id.value', '777')
/*
{ user:
   { name: 'username',
     id: { value: '777' },
     info: { city: 'paris', country: 'france' } } }
*/

var country = nested.get(obj, 'user.info.country')
/*
  france
*/

/* use this method to prevent : TypeError: Cannot read property 'test' of undefined */
var undefinedTest = nested.get(obj, 'user.prop1.prop2')
/*
  undefined
*/


```
