import { getMods, validateProps } from '../../assets/js/utils/helpers';

let className = 'text';

const Text = (props) => {
  return (`
    <${props.tag ? props.tag : 'span'} class="${className} ${getMods(className, props)}">
      ${props.value ? props.value : ''}
    </${props.tag ? props.tag : 'span'}>
  `)
}

export default Text;
