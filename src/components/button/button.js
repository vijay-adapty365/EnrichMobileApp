import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
    // Implementation will go here
}

Button.defaultProps = {
    variant: "fill",
    text: null,
}

Button.propTypes = {
    variant: PropTypes.string.isRequired, //fill | outline 
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object
}