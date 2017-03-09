var ReactDOM = require('react-dom');
var React = require('react');

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Nick',
  lastName: 'Berry'
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
