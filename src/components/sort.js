function sortData(property) {
  var sortOrder = 1

  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }

  return function (a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property])
    } else {
      return a[property].localeCompare(b[property])
    }
  }
}

const dynamicSort = (data, title) => {
  data.sort()
  data.sort(sortData(title))
}

export default dynamicSort