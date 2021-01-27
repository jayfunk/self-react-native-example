import React from 'react';

import {Image, Button} from 'react-native';
import {shallow} from 'enzyme';

import StarRating from '../StarRating';

describe('Star Rating', () => {
  test('should render ten grey stars when the rating is zero', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} rating={0} />);

    const greyStars = wrapper
      .find(Image)
      .filterWhere((n) => n.prop('source').testUri.includes('Star_Grey.png'));

    expect(greyStars.length).toEqual(10);
  });

  test('should render purple stars equal to the rating when given a rating greater than zero', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} rating={4} />);

    const purpleStars = wrapper
      .find(Image)
      .filterWhere((n) => n.prop('source').testUri.includes('Star_Purple.png'));

    expect(purpleStars.length).toEqual(4);
  });

  test('should call the onChange callback when a star is pressed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<StarRating onChange={mockOnChange} rating={0} />);

    wrapper.find(Button).at(6).prop('onPress')();

    expect(mockOnChange).toHaveBeenCalledWith(7);
  });
});
