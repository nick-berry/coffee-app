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

var PostList = React.createClass({
  render: function() {
    var posts = [{
      userName: "NBerry",
      location: "3 Pleasant Street",
      order: "Large coffee black",
      shop: "Vonsolln"
    },
    {
      userName: "Gthorsen",
      location: "4 Market Street",
      order: "Large medium cream & sugar",
      shop: "BNG"
    }];
    var postList = posts.map(function(post, index){
      return <div className="list-group-item" key={ index }><span>{post.userName} </span><span>{post.location} </span><span>{post.order} </span><span>{post.shop}</span></div>;
    })
    return <div className="list-group">{postList}</div>
  }
});

ReactDOM.render(
  <PostList />,
  document.getElementById('root')
);
