import React, {Component} from 'react';
import {Image, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import greyStar from './Assets/Star_Grey.png';
import purpleStar from './Assets/Star_Purple.png';

class StarRating extends Component {
  render() {
    const renderedStars = [];
    for (let i = 0; i < 10; i++) {
      const ratingIndex = this.props.rating - 1;
      const imageSource = i <= ratingIndex ? purpleStar : greyStar;
      renderedStars.push(
        <Button key={i} onPress={this.props.onChange.bind(this, i + 1)}>
          <Image source={imageSource} />
        </Button>,
      );
    }
    return <View>{renderedStars}</View>;
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarRating;
