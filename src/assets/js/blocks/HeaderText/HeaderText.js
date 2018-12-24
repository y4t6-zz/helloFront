import { getMods, validateProps, el } from '../../utils/helpers';
import HeaderTextPropTypes from './HeaderTextPropTypes';
import Text from "../Text/Text";

let className = 'header-text';

const HeaderText = (props) => {

  validateProps(props, HeaderTextPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      ${props.text ? Text(props.text) : ''}
     
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default HeaderText;
