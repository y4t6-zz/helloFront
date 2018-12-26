import { getMods, validateProps, el } from '../../assets/js/utils/helpers';
import SwitcherPropTypes from './SwitcherPropTypes';
import Control from "../Control/Control";

let className = 'switcher';

const Switcher = (props) => {

  validateProps(props, SwitcherPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      ${props.items ?
        props.items.map((item) => {
          switch (item.block) {
            case 'control':
              return (
                `
                  ${Control(item.data)}
                `
              );
            }
          }).join(' ')
        : ''}
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default Switcher;
