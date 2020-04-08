import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat';


class FlatList extends Component {
  // static defaultProps = { flats:
  //   [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   }]
  // }

  componentWillMount() {
   this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
