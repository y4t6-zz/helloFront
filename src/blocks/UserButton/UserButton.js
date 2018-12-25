import { getMods, validateProps, el } from '../../assets/js/utils/helpers';
import UserButtonPropTypes from './UserButtonPropTypes';

let className = 'user-button';

const UserButton = (props) => {

  validateProps(props, UserButtonPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default UserButton;
