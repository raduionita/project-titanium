function _buildBuyButton() {
    var button = Ti.UI.createButton({
        right : 20,
        bottom: 20,
        width : 30,
        height: 30,
        backgroundColor: 'white',
        backgroundImage: '../images/shopping_cart_yellow.png',
        zIndex: 10000
    });
    
    button.addEventListener('click', function() {
        alert('buy');
    });
    
    return button;
}

module.exports = _buildBuyButton();
