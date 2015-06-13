/*
 * Example app Android Canvas module
 * (c) WorldWise Learning 2013 - All rights reserved
 */


/* Open a single window */
var win = Ti.UI.createWindow({
	backgroundColor:'green'
});
win.open();



var label = Ti.UI.createLabel({
    font: {
        fontSize: 28
    },
    color: 'black',
    zIndex: 2000,
    left: 50,
    top: 50,
    text: 'This text appear in front of the canvas'
});
win.add(label);





/* The canvas view fires a load event when it is ready to draw upon */ 


    /* Clear button */
    var clearButton = Ti.UI.createButton({
        left: 20,
        bottom: 20,
        title: 'Clear',
        zIndex: 1000
    });
    win.add(clearButton);

    /* Bind event handler to clear button */
    clearButton.addEventListener('click', function(e) {
        e.cancelBubble = true;
        canvas.clear();
    });

	
	
    /* Picker for canvas draws */
    var picker = Ti.UI.createPicker({
        right: 160,
        bottom:20,
        zIndex: 1000
    });
var shapes = [ {
				name: 'test',
				fn: function()
				{
					win.add();
				}
			},
			{
				name: 'test2',
				fn: function()
				{
					win.add();
				}
			}
];
    var rows = [];
    shapes.forEach(function(shape, index) {
        rows.push(Ti.UI.createPickerRow({
            index: index,
            title: shape.name
        }));
    });
    picker.add(rows);
    picker.selectionIndicator = true;
    win.add(picker);
    
    var selectBtn = Ti.UI.createButton({
        right: 20,
        bottom: 20,
        backgroundColor: 'transparent',
        backgroundFocusedImage: 'images/shopping_cart_64.png',
        image: 'images/Purple-Shop.png',
        zIndex: 1000
    });
    
    selectBtn.addEventListener('hover', function(e){
    selectBtn.image = 'images/shopping_cart_64.png';
    alert("test");
	});
    
    selectBtn.addEventListener('click', function(e) {
    
        var row = picker.getSelectedRow(0);
        var index = row.index;
        shapes[index].fn();
    });
    
    win.add(selectBtn);
   
     
    
    // Create an ImageView.
    var cart = Ti.UI.createImageView({
        image : 'images/shopping_cart_64.png',
        width : 32,
        height : 32,
        top : 200,
        left : 200
    });
    cart.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    win.add(cart);
     
    
    // Create an ImageView.
    var shoppin_cart = Ti.UI.createImageView({
        image : 'images/Purple-Shop.png',
        width : 32,
        height : 32,
        top : 300,
        left : 300
    });
    shoppin_cart.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    win.add(shoppin_cart);
            
    // Create an ImageView.
    var picture = Ti.UI.createImageView({
        image : 'images/flower.jpg',
        width : 200,
        height : 200,
        top : 300,
        left : 100
    });
    picture.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    win.add(picture);
            



/* Animate view and 'take a picture'
 * You can even draw on the canvas during the animation */
picture.addEventListener('swipe', function() {

    var matrix = Ti.UI.create2DMatrix();
        matrix = matrix.rotate(180);
    matrix = matrix.scale(2, 2);

    var a = Ti.UI.createAnimation({
        transform : matrix,
        duration : 2000,
        autoreverse : true,
        repeat : 3
    });
alert("swipe");
  picture.animate(a);
    a.addEventListener('complete', function() {
       
        
    });
});
