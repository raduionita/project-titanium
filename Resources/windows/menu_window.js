function _buildMenuWindow() {
    var win = Ti.UI.createWindow({
        backgroundColor: '#FFF',
        navBarHidden   : true,
        fullscreen     : true
    });
    
    Ti.App.addEventListener('_open_menu_window_', function(e){
        alert('_open_menu_window_');
    });
}

module.exports = _buildMenuWindow();
