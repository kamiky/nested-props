function setNestedProperty (obj, name, value) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('nestedProps first argument should be a javascript object')
  }
  var props = name.split('.')
  var tmp = obj
  props.forEach(function(prop, index) {
    if (index === props.length - 1) {
      tmp[prop] = value
    } else {
      if (tmp[prop] === null || typeof tmp[prop] !== 'object') {
        tmp[prop] = {}
      }
      tmp = tmp[prop]
    }
  })
  return obj
}

function getNestedProperty (obj, property) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('nestedProps first argument should be a javscript object')
  }
  var props = property.split('.')

  props.forEach(function (prop, index) {
    if (obj) {
      obj = obj[prop]
    }
  })
  return obj
}

module.exports = {
  set: setNestedProperty,
  get: getNestedProperty
}
