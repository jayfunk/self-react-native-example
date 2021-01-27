import {Image, Button} from 'react-native';
import {shallow} from 'enzyme';

import StarRating from '../StarRating';

describe('Star Rating', () => {
  test('should render stars', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} />);

    const stars = wrapper.find(Button);

    expect(stars.length).toEqual(10);

    const starImage = stars.first().find(Image);

    expect(starImage.prop('source').testUri).toMatch('Star_Grey.png');
  });

  test('should call the onChange callback when a star is pressed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<StarRating onChange={mockOnChange} />);

    const buttons = wrapper.find(Button);
    buttons.last().prop('onPress')();

    expect(mockOnChange).toHaveBeenCalledWith(10);
  });

  test('should render the number of purple stars equal to the rating when given a rating', () => {
    const wrapper = shallow(<StarRating onChange={jest.fn()} rating={4} />);

    const starImages = wrapper.find(Image);

    expect(starImages.at(0).prop('source').testUri).toMatch('Star_Purple.png');
    expect(starImages.at(1).prop('source').testUri).toMatch('Star_Purple.png');
    expect(starImages.at(2).prop('source').testUri).toMatch('Star_Purple.png');
    expect(starImages.at(3).prop('source').testUri).toMatch('Star_Purple.png');

    expect(starImages.at(4).prop('source').testUri).toMatch('Star_Grey.png');
    expect(starImages.at(5).prop('source').testUri).toMatch('Star_Grey.png');
    expect(starImages.at(6).prop('source').testUri).toMatch('Star_Grey.png');
    expect(starImages.at(7).prop('source').testUri).toMatch('Star_Grey.png');
    expect(starImages.at(8).prop('source').testUri).toMatch('Star_Grey.png');
    expect(starImages.at(9).prop('source').testUri).toMatch('Star_Grey.png');
  });
});
