import React from 'react';
import {Image, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import greyStar from './Assets/Star_Grey.png';
import purpleStar from './Assets/Star_Purple.png';

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function StarRating(props) {
  const renderedStars = stars.map((star) => {
    const imageSource = star <= props.rating ? purpleStar : greyStar;

    return (
      <Button key={star} onPress={props.onChange.bind(this, star)}>
        <Image source={imageSource} />
      </Button>
    );
  });
  return <View>{renderedStars}</View>;
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarRating;
