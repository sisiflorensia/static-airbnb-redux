import React, { Component } from 'react';

class FlatList extends Component {
  static defaultProps = { flats: [{
    "name": "Charm at the Steps of Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/ lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR" }]
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        To Do flat list
      </div>
    );
  }
}

export default FlatList;
