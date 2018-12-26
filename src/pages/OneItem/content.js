import Sidebar from '../../blocks/Sidebar/Sidebar';
import UserButton from '../../blocks/UserButton/UserButton';
import HeaderText from '../../blocks/HeaderText/HeaderText';
import Cards from '../../blocks/Cards/Cards';

const OneItemPage = () => {

  var cards = [],
      cardItem = {
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
      sections = [],
      sectionItem = {
        'type': 'header',
        'block': 'switcher',
        'data': {
          'id': '23443',
          'tag': 'div'
        }
      };

  for (var i = 0; i < 10000; i++) {
    cards.push(cardItem);
    sections.push(sectionItem);
  }

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
          'tag': 'div',
          'mods': 'h68px',
          'items': [
            {
              'type': 'control',
              'block': 'control',
              'data': {
                'id': '34113434',
                'tag': 'a',
                'href': '/index.html',
                'mods': 'p4 h32px w64px br16px',
                'theme': 'primary-switcher',
                'active': true,
                'text': {
                  'value': 'MD',
                  'size': '18',
                  'weight': 'bold'
                }
              }
            },
            {
              'type': 'control',
              'block': 'control',
              'data': {
                'id': '34113434',
                'tag': 'a',
                'href': '/my-friends-desks.html',
                'mods': 'p4 h32px w64px br16px',
                'theme': 'primary-switcher',
                'text': {
                  'value': 'MFD',
                  'size': '18',
                  'weight': 'bold'
                }
              }
            }
          ]
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
        'offset-horizontal': 'large',
        'mods': 'pt3',
        'text': {
          'tag': 'h1',
          'value': 'My facebook',
          'size': '28',
          'weight': 'bold'
        }
      })}
      ${Cards({
        'id': 'md-cards',
        'tag': 'div',
        'mods': 'p3',
        'items': cards
      })}
      
    </content>
  `;

  document.querySelector('.one-item-page') ? document.querySelector('.one-item-page').innerHTML = Grid : '';
};

export default OneItemPage;
