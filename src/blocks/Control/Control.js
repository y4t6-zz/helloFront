import { getMods, validateProps, el } from '../../assets/js/utils/helpers';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import ControlPropsTypes from './ControlPropsTypes';

let className = 'control';

const Control = (props) => {

  validateProps(props, ControlPropsTypes);

  const getHref = () => {
    return props.href ? props.href : '/index.html';
  };

  return (`
    <${props.tag ? props.tag : 'button'} href="${getHref()}" class="${className} ${getMods(className, props)}">
        ${props.icon ?
          `<div className="${el(className, 'icon')}">
            ${Icon(props.icon)}
          </div>`
        : ''}
        ${props.text ?
          `<div className="${el(className, 'text')}">
            ${Text(props.text)}
          </div>`
        : ''}
    </${props.tag ? props.tag : 'button'}>
  `)
};

export default Control;
