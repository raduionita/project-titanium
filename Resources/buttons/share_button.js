function _buildShareButton() {
    var button = Ti.UI.createButton({
        left  : 20,
        bottom: 20,
        width : 30,
        height: 30,
        backgroundColor: 'white',
        backgroundImage: '../images/shopping_cart_64.png',
        zIndex: 10000
    });

    button.addEventListener('click', function() {
        alert('share');
    });
    
    return button;
};

module.exports = _buildShareButton();
