import { getMods, validateProps, el } from '../../utils/helpers';
import CardsPropTypes from './CardsPropTypes';
import Card from "../Card/Card";

let className = 'cards';

const Cards = (props) => {

  validateProps(props, CardsPropTypes);

  return (`
    <${props.tag ? props.tag : 'div'} class="${className} ${getMods(className, props)}">
    
      ${props.items ?
        props.items.map((item) => {
          
          function getItem(item) {
            
            switch (item.block) {
              case 'card':
                return (
                  `
                  ${Card(item.data)}
                  `
                );
              default:
                return `<p>Default</p>`
            }
            
          }
          
          return (
            `
            <div class="${el(className, 'item')} ${item.mods}">
              ${item.block ? getItem(item) : ''}
            </div>
            `
          )
        }).join(' ')
      : ''}
      
    </${props.tag ? props.tag : 'div'}>
  `)
};

export default Cards;
