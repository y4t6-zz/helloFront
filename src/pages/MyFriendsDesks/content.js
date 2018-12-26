import Sidebar from '../../blocks/Sidebar/Sidebar';
import UserButton from '../../blocks/UserButton/UserButton';
import HeaderText from '../../blocks/HeaderText/HeaderText';
import Cards from '../../blocks/Cards/Cards';

const IndexPage = () => {

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
                  'active': true,
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
        'mods': 'pt3 pl5',
        'text': {
          'tag': 'h1',
          'value': 'My Friends Desks',
          'size': '28',
          'weight': 'bold'
        }
      })}
    </content>
  `;

  document.querySelector('.my-friends-desks') ? document.querySelector('.my-friends-desks').innerHTML = Grid : '';
};

export default IndexPage;
