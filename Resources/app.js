var main = require('windows/main_window');
main.addEventListener('open', function() {
    main.activity.actionBar.hide();
});
main.open();
