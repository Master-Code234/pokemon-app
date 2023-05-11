const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a new pokemon</h1>

        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          <input type="submit" name="" value="Create pokemon" />
        </form>
      </div>
    );
  }
}
module.exports = New;
