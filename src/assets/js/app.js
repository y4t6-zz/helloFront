import Control from './components/Control/Control';
import ControlViewOne from './components/Control/ControlViewOne';
import * as merge from 'deepmerge';

var items = [];
for(var i = 0; i <= 1000; i++) {
  items.push('test');
}

let Dialog = `
  <div>
    ${items.map((item, i) => Control({
        'id': '34113434',
        'tag': 'button',
        'mods': 'p4',
        'icon': {
          'name': 'Icon'
        },
        'text': {
          'value': 'Click meeee',
          'mods': 'p4'
        }
    })).join(' ')}
  
  </div>
`;

document.body.innerHTML = Dialog;

