import { getMods, validateProps } from '../../utils/helpers';

const Icon = (props) => {
  return (`
    <span class="icon">
      ${props.name ? props.name : ''}
    </span>
  `)
}

export default Icon;
