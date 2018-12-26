const getMods = (className, props) => {
  let mods = [];

  if (props.theme) {
    mods.push(className + '--theme--' + props.theme);
  }

  if (props.size) {
    mods.push(className + '--size--' + props.size);
  }

  if (props.position) {
    mods.push(className + '--position--' + props.position);
  }

  if (props['offset-horizontal']) {
    mods.push(className + '--offset-horizontal--' + props['offset-horizontal']);
  }

  if (props.weight) {
    mods.push(className + '--weight--' + props.weight);
  }

  if (props.active === true) {
    mods.push('is-active');
  }

  if (props.mods) {
    mods.push(props.mods);
  }

  return mods.join(' ');
}

const validateProps = (props, propsTypes) => {
  var elObj;
  for (var key in propsTypes) {
    if (propsTypes.hasOwnProperty(key)) {
      elObj = propsTypes[key];
      if(elObj.required) {

        if(!props.hasOwnProperty(key)) {
          console.log(key + ' - обязательный атрибут. id - ' + props.id);
        }
      }
    }
  }
  return propsTypes;
}

const el = (className, elName) => {
  return className + '__' + elName;
}

export {
  getMods,
  validateProps,
  el
};
