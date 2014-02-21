require.config({
    'paths': { 'css': 'loader/css' },
    'packages': [
        {
            'name': 'esui',
            'location': '../src'
        },
        {
            'name': 'mini-event',
            'location': '../dep/mini-event/1.0.0/src',
            'main': 'main'
        },
        {
            'name': 'underscore',
            'location': '../dep/underscore/1.5.2/src',
            'main': 'underscore'
        },
        {
            'name': 'moment',
            'location': '../dep/moment/2.0.0/src',
            'main': 'moment'
        },
        {
            'name': 'etpl',
            'location': '../dep/etpl/2.0.8/src',
            'main': 'main'
        }
    ]
});
document.createElement('header');