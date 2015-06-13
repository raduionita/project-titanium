function _buildMainWindow() {
    var win = Ti.UI.createWindow({
        navBarHidden   : true,
        fullscreen     : true
    });

    var main_layout = require('layouts/main_layout');
    win.add(main_layout);
    
    var menu_layout = require('layouts/menu_layout');
    win.add(menu_layout); 
    
    return win;
}

module.exports = _buildMainWindow();

