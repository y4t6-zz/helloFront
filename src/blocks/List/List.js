import { getMods, validateProps, el } from '../../assets/js/utils/helpers';
import ListPropTypes from './ListPropTypes';

let className = 'list';

const List = (props) => {

  validateProps(props, ListPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      <div>List</div>
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default List;
