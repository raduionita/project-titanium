function _buildMenuLayout() {
    var layout = Ti.UI.createView({ 
        top   : 0,
        left  : -355,
        width : '100%',
        height: '100%',
        backgroundColor: 'transparent'
    });
    
    var content = Ti.UI.createView({
        top   : 0,
        left  : 0, 
        width : '70%',
        height: Ti.UI.FILL,
        backgroundColor: 'black',
        layout: 'vertical'
    });
    
    layout.add(content);
    
    //////////////////////////////////////////////
    
    var opened = false;
    var preventDefault = false;
    
    Ti.App.addEventListener('open.menuLayout', function(e) {
        Ti.API.info('open.menuLayout');
        if(!opened) {
            layout.animate({
                left: 0
            });
        } else {
            //layout.animate(animation);
        }
        
        opened = !opened;
    });
    
    layout.addEventListener('swipe', function(e) {
        Ti.API.info('swipe');
        if(e.direction == 'left') {
            layout.animate({
                left: -355
            });
            opened = false;
        }
    });
    
    layout.addEventListener('click', function(e) {
        if(preventDefault) {
            preventDefault = false;
            return;
        }
        
        Ti.API.info('open.menuLayout');
        layout.animate({
            left: -355
        });
        opened = false;
    });
    
    content.addEventListener('click', function(e) {
        preventDefault = true;
    });
    
    return layout;
}

module.exports = _buildMenuLayout();