const getMods = (className, props) => {
  let mods = [];

  if (props.theme) {
    mods.push(className + '--theme--' + props.theme);
  }

  if (props.size) {
    mods.push(className + '--size--' + props.size);
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
