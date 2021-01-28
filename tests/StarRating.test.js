import React from 'react';
import {shallow} from 'enzyme';
import {Image, Button} from 'react-native';

import StarRating from '../StarRating';

describe('Star Rating', () => {
  test('should render ten stars when the rating is zero', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} rating={0} />);

    const images = wrapper
      .find(Image)
      .filterWhere((node) =>
        node.prop('source').testUri.includes('Star_Grey.png'),
      );

    expect(images.length).toEqual(10);
  });

  test('should render purple stars equal to the rating when given a rating greater than zero', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} rating={4} />);

    const images = wrapper
      .find(Image)
      .filterWhere((node) =>
        node.prop('source').testUri.includes('Star_Purple.png'),
      );

    expect(images.length).toEqual(4);
  });

  test('should call the onChange callback when a star is pressed', () => {
    const mockOnChange = jest.fn();

    const wrapper = shallow(<StarRating onChange={mockOnChange} rating={4} />);

    wrapper.find(Button).at(6).prop('onPress')();

    expect(mockOnChange).toHaveBeenCalledWith(7);
  });
});
