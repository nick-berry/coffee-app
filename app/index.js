var ReactDOM = require('react-dom');
var React = require('react');

function formatName(users) {
  return users.map((user) => <li>Hello, {user.firstName} {user.lastName}!</li>)
}

const users = [{
  firstName: 'Nick',
  lastName: 'Berry'
},
{
  firstName: 'Graham',
  lastName: 'Thorsen'
}]

const element = (
  <ul>
    {formatName(users)}
  </ul>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
