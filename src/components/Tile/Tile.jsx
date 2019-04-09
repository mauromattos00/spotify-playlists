import React from "react";
import "./Tile.scss";


class Tile extends React.Component {
  
  render() {
    const style = {
      backgroundImage: "url("+this.props.backgroundImage+")",
      backgroundSize: "200px 200px"
    };
    return (
      <div className="tile" style={style}>
      </div>
    );
  }
}

export default Tile;
