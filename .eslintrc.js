module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],

  "env": {
    "browser": true
  },

  // override airbnb rules
  "rules": {
    "quotes": 0,
    "quote-props": 0,
    "linebreak-style": 0,
    "jsx-a11y/href-no-hash": 0,
    "comma-dangle": 0,
    "class-methods-use-this": 0,
    "arrow-body-style": 0,
    "prefer-template": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": 0,
    "react/self-closing-comp": 0,
    "no-var": 0,
    "react/prop-types": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-script-url": 0,
    "prefer-const": 0,
    "max-len": 0,
    "no-plusplus": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/jsx-no-bind": 0,
    "padded-blocks": 0,
    'space-infix-ops': 0,
    "import/prefer-default-export": 0,
    "no-nested-ternary": 0,
    "object-shorthand": 0,
    "dot-notation": 0,
    "no-param-reassign": 0,
    "no-console": 0,
    "global-require": 0,
    "no-restricted-syntax": 0,
    "radix": 0,
    "guard-for-in": 0,
    "no-else-return": 0,
    "vars-on-top": 0,
    "no-lonely-if": 0,
    "prefer-arrow-callback": 0,
    "no-unused-expressions": 0,
    "func-names": 0,
    "react/no-array-index-key": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "arrow-parens": 0,

    "no-unused-vars": 1,
    "eol-last": 1
  },
  
  "globals": {
    "AppConf": true,
    "echarts": true
  }
};