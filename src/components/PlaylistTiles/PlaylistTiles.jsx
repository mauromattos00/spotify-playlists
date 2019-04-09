import React from "react";
import * as Faker from "faker";

import "./PlaylistTiles.scss";

import Tile from "../Tile/Tile";
Faker.locale = "pt_BR";

class PlaylistTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    };
  }
  
  componentDidMount() {
    let playlists = [];
    for (let i = 1; i <= 5; i++) {
      playlists = [...playlists, {
        img: Faker.image.image(),
        description: `Seu Daily Mix ${i}`
      }];
    }
  
    this.setState({
      tiles: playlists
    });
  }
  
  render() {
    return (
      <div className="tiles">
        {this.state.tiles.map((tile, index) => (
          <Tile key={index} description={tile.description} backgroundImage={tile.img} />
        ))}
      </div>
    );
  }
}

export default PlaylistTiles;
