const ControlPropsTypes = {
    'tag': {
        'required': true
    },
    'theme': {
        'required': false
    },
    'size': {
        'required': false,
          'variants': [
            'small'
          ]
    },
    'icon': {
      'required': false,
      'type': 'component'
    }
};

export default ControlPropsTypes;
