const React = require("react");

const myStyle = {
  color: "#fff",
  backgroundColor: "#000",
};

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {this.props.pokemons.map((data, i) => {
            const displayPokemon =
              data.name[0].toUpperCase() + data.name.substring(1);
            return (
              <li>
                <a href={`/pokemon/${data.id}`}>{displayPokemon} </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
