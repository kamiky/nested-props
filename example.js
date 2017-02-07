var nested = require('./index')

var obj = {
  coordinates: [{
    value: [11, 22]
  }, {
    value: [33, 44, 55]
  }]
}
nested.set(obj, 'user.name', 'username')
nested.set(obj, 'user.id', '666')
nested.set(obj, 'user.info.city', 'paris')
nested.set(obj, 'user.info.country', 'france')
/*
{ coordinates: [ { value: [Object] }, { value: [Object] } ],
  user:
   { name: 'username',
     id: '666',
     info: { city: 'paris', country: 'france' } } }
*/

nested.set(obj, 'user.id.value', '666')
/*
{ coordinates: [ { value: [Object] }, { value: [Object] } ],
  user:
   { name: 'username',
     id: { value: '666' },
     info: { city: 'paris', country: 'france' } } }
*/

nested.set(obj, 'user.id.value', '777')
/*
{ coordinates: [ { value: [Object] }, { value: [Object] } ],
  user:
   { name: 'username',
     id: { value: '777' },
     info: { city: 'paris', country: 'france' } } }
*/

var country = nested.get(obj, 'user.test.test')
/*
  france
*/

/* use this method to prevent : TypeError: Cannot read property 'test' of undefined */
var undefinedTest = nested.get(obj, 'user.test.test')
/*
  undefined
*/


var coordinate1 = nested.get(obj, 'coordinates[0].value')
/* [11, 22] */
var x2 = nested.get(obj, 'coordinates[1].value[0]')
/* 33 */
var y2 = nested.get(obj, 'coordinates[1].value[1]')
/* 44 */

var x3 = nested.get(obj, 'coordinates[3].value[0]')
/* null */

console.log(x3)


