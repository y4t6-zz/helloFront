import { getMods, validateProps } from '../../utils/helpers';
import Icon from '../Icon/Icon';

let className = 'text';

const Text = (props) => {
  return (`
    <span class="${className} ${getMods(className, props)}">
      ${props.value ? props.value : ''}
    </span>
  `)
}

export default Text;
