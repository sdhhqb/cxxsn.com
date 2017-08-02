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
    	
    	"no-unused-vars": 1,
    	"eol-last": 1
    }
};