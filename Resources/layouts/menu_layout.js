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
        width : '20%',
        height: Ti.UI.FILL,
        backgroundColor: '#AAAAAAFF'
    });
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var i = 1;
    var products = require('database/products');
    var c1view = Ti.UI.createView({
        top   : 65 + 80 * (i++),
        left  : '15%', 
        width : 50,
        height: 50,
        backgroundImage: 'images/iconset/women/dress.png'
    });
    c1view.addEventListener('click', function(e) {
        //Ti.App.fireEvent('set.category', { category: 'dress', slot: 0 });
        layout.animate({ left: -355 });
    }); 
    var c2view = Ti.UI.createView({
        top   : 65 + 80 * (i++),
        left  : '15%', 
        width : 50, 
        height: 50,
        backgroundImage: 'images/iconset/women/top.png'
    });
    c2view.addEventListener('click', function(e) {
        //Ti.App.fireEvent('set.category', { category: 'top', slot: 0 });
        layout.animate({ left: -355 });
    });
    var c3view = Ti.UI.createView({
        top   : 65 + 80 * (i++),
        left  : '15%', 
        width : 50,
        height: 50,
        backgroundImage: 'images/iconset/women/pants.png'
    });
    c3view.addEventListener('click', function(e) {
        //Ti.App.fireEvent('set.category', { category: 'pants', slot: 1 });
        layout.animate({ left: -355 });
    });
    var c4view = Ti.UI.createView({
        top   : 65 + 80 * (i++),
        left  : '15%', 
        width : 50,
        height: 50,
        backgroundImage: 'images/iconset/women/shoes.png'
    });
    c4view.addEventListener('click', function(e) {
        //Ti.App.fireEvent('set.category', { category: 'shoes', slot: 2 });
        layout.animate({ left: -355 });
    });
    
    content.add(c1view);
    content.add(c2view);
    content.add(c3view);
    content.add(c4view);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    layout.add(content);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
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