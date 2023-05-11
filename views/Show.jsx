const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemons.name[0].toUpperCase() + pokemons.name.substring(1)}</h2>

        <img src={pokemons.img + ".jpg"} alt={` Picture of ${pokemons.name}`} />

        <a href="/pokemon">Back</a>
      </div>
    );
  }
}
module.exports = Show;
