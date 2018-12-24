import { getMods, validateProps, el } from '../../utils/helpers';
import FormItemPropTypes from './FormItemPropTypes';

let className = 'form-item';

const FormItem = (props) => {

  validateProps(props, FormItemPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      <div>FormItem</div>
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default FormItem;
