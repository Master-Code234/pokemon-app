const React = require("react");

class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>
          {this.props.pokemon.name[0].toUpperCase() +
            this.props.pokemon.name.substring(1)}
        </h2>

        <br />

        <a href="/pokemon">Back</a>
      </div>
    );
  }
}
module.exports = Show;
