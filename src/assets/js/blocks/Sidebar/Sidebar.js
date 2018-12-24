import { getMods, validateProps, el } from '../../utils/helpers';
import SidebarPropTypes from './SidebarPropTypes';

import Switcher from '../Switcher/Switcher';
import FormItem from '../FormItem/FormItem';
import List from '../List/List';

let className = 'sidebar';

const Sidebar = (props) => {

  validateProps(props, SidebarPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      ${props.sections ?
        props.sections.map((item) => {
          switch (item.block) {
            case 'switcher':
              return (
                `
                  ${Switcher(item.data)}
                `
              );
            case 'formItem':
              return (
                `
                  ${FormItem(item.data)}
                `
              );
            case 'list':
              return (
                `
                  ${List(item.data)}
                `
              );
          }
        }).join(' ')
      : ''}
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default Sidebar;
