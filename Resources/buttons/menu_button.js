function _buildMenuButton() {
    var button = Ti.UI.createButton({
        left  : 20,
        top   : 20,
        width : 30,
        height: 30,
        backgroundColor: 'white',
        backgroundImage: '../images/shopping_cart_64.png',
        zIndex: 1000
    });
    
    button.addEventListener('click', function(e) {
        Ti.App.fireEvent('open.menuLayout');
    });
    
    return button;
}

module.exports = _buildMenuButton();
