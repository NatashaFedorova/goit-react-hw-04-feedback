import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, Item, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick, options }) => {
  return (
    <>
      <List>
        {options.map(option => {
          return (
            <Item key={nanoid()}>
              <Btn type="button" name={option} onClick={onClick}>
                {option}
              </Btn>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propType = {
  onClick: PropTypes.PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};
