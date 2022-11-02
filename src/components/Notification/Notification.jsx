import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = ({ message }) => <Text>{message}</Text>;

export default Notification;

Notification.propType = {
  message: PropTypes.string.isRequired,
};
