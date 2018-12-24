import Sidebar from './blocks/Sidebar/Sidebar';
import UserButton from './blocks/UserButton/UserButton';
import HeaderText from './blocks/HeaderText/HeaderText';
import Cards from './blocks/Cards/Cards';

let Grid = `
  ${Sidebar({
    'id': '34113434',
    'theme': 'primary',
    'position': 'left',
    'tag': 'aside',
    'sections': [
      {
        'type': 'header',
        'block': 'switcher',
        'data': {
          'id': '23443',
          'tag': 'div'
        }
      },
      {
        'type': 'search',
        'block': 'formItem',
        'data': {
          'id': '23443dd',
          'tag': 'div'
        }
      },
      {
        'type': 'list',
        'block': 'list',
        'data': {
          'id': '23443dd',
          'tag': 'ul'
        }
      }
    ]
  })}
  <content class="grid__content">
    ${UserButton({
      'id': '3411ds4',
      'theme': 'primary',
      'tag': 'div',
      'mods': 't3 r3'
    })}
    ${HeaderText({
      'id': 'werwe344',
      'tag': 'div',
      'mods': 'pt3 pl5',
      'text': {
        'tag': 'h1',
        'value': 'Social Networks',
        'size': '28',
        'weight': 'bold'
      }
    })}
    ${Cards({
      'id': 'md-cards',
      'tag': 'div',
      'mods': 'p3',
      'items': [
        {
          'type': 'card',
          'block': 'card',
          'mods': 'p2',
          'data': {
            'id': '23443',
            'tag': 'div',
            'externalLink': {
              'block': 'control',
              'data': {
                'id': '34113434',
                'tag': 'button',
                'mods': 'p4 h8 br8',
                'size': 'parent-width',
                'theme': 'transparent-white',
                'text': {
                  'value': 'Open',
                  'size': '18',
                  'weight': 'bold'
                }
              }
            }
          }
        },
        {
          'type': 'card',
          'block': 'card',
          'mods': 'p2',
          'data': {
            'id': '23443',
            'tag': 'div'
          }
        }
      ]
    })}
    
  </content>
`;

document.body.innerHTML = Grid;

