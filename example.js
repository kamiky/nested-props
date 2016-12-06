var nested = require('./index')

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

var country = nested.get(obj, 'user.test.test')
/*
  france
*/

/* use this method to prevent
TypeError: Cannot read property 'test' of undefined */
var undefinedTest = nested.get(obj, 'user.test.test')
/*
  undefined
*/

console.log(obj)
