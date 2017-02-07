function setNestedProperty (obj, name, value) {
  if (!(typeof obj === 'object' || !obj || Array.isArray(obj))) {
    throw new Error('nestedProps first argument type is not supported')
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
  if (!(typeof obj === 'object' || !obj || Array.isArray(obj))) {
    throw new Error('nestedProps first argument type is not supported')
  }
  if (!obj) return null
  var props = property.split('.')
  var regex = new RegExp('\\[(.*?)\\]', 'gi')
  var result, prop, objectProperty, index

  for (var i = 0; i < props.length; ++i) {
    prop = props[i]
    objectProperty = prop.substr(0, prop.indexOf('['))
    if (prop.indexOf('[') === -1 && !objectProperty) {
      objectProperty = prop
    }
    if (obj && objectProperty && objectProperty.length > 0) {
      obj = obj[objectProperty]
    }
    while ((result = regex.exec(prop))) {
      index = result[1]
      if (obj && Array.isArray(obj) && obj.length > index && index >= 0) {
        obj = obj[index]
      } else {
        return null
      }
    }
  }
  return obj
}

module.exports = {
  set: setNestedProperty,
  get: getNestedProperty
}
