export function prettyArrayToString(array: string[]) {
  array = array.map(i => i.toLowerCase())
  if (array.length === 1) {
    return array[0]
  } else if (array.length === 2) {
    return `${array[0]} and ${array[1]}`
  } else {
    const lastIndex = array[array.length-1]
    array.pop()
    return array.concat([`and ${lastIndex}`]).join(', ')
  }
}