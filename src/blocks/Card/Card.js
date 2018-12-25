import { getMods, validateProps, el } from '../../assets/js/utils/helpers';
import CardPropTypes from './CardPropTypes';
import Control from "../Control/Control";

let className = 'card';

const Card = (props) => {

  validateProps(props, CardPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      <div class="${el(className, 'main')}">
        ${props.externalLink ?
          `<div class="${el(className, 'external-link')}">
            ${Control(props.externalLink.data)}
          </div>`
        : ''}
      </div>
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default Card;
