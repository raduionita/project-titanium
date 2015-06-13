function _buildMainLayout() {
    var layout = Ti.UI.createView({ 
        top   : 0,
        left  : 0,
        width : Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor:'white',
        backgroundImage: 'images/model.png'
    });
    
    var buy_button = require('buttons/buy_button'); 
    layout.add(buy_button);
    
    var share_button = require('buttons/share_button'); 
    layout.add(share_button);
    
    var menu_button = require('buttons/menu_button'); 
    layout.add(menu_button);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function swipe(e) {
        if(e.direction == 'left') {
            alert('head.left');
        } else if(e.direction == 'right') {
            alert('head.right');
        }
    }
    
    var head = Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: '20%',
        backgroundColor: 'transparent'
    });
    head.addEventListener('swipe', swipe);
    layout.add(head);
    
    var body = Ti.UI.createView({
        left  : 0,
        top   : '20%',
        width : Ti.UI.FILL,
        height: '40%',
        backgroundColor: 'transparent'
    });
    body.addEventListener('swipe', swipe);
    layout.add(body);
    
    var feet = Ti.UI.createView({
        left  : 0,
        top   : '60%',
        width : Ti.UI.FILL,
        height: '40%',
        backgroundColor: 'transparent'
    });
    feet.addEventListener('swipe', swipe);
    layout.add(feet);
    
    return layout;
}

module.exports = _buildMainLayout();
