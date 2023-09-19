function letters() {

}

function renderShapes(shapes) {
  if (shapes === 'Circle') {
    return '<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>';
  } else if (shapes === 'Rectangle') {
    return '  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>';
  } else if (shapes === 'Triangle') {
    return '';
  }
}