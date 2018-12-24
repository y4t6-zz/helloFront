import { getMods, validateProps, el } from '../../utils/helpers';
import SwitcherPropTypes from './SwitcherPropTypes';

let className = 'switcher';

const Switcher = (props) => {

  validateProps(props, SwitcherPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      <div>Switcher</div>
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default Switcher;
