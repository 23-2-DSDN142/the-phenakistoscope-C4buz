const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jelly","png",7)
  
}

function setup_layers(pScope){

  new PLayer(null, 27, 39, 71);  //lets us draw the whole circle background, ignoring the boundaries
  
  var layer1 = new PLayer(outer,color(52, 75, 138) );
  layer1.mode( RING );
  layer1.set_boundary(200,1000);

  var layer2 = new PLayer(outer,color(143, 160, 207) );
  layer2.mode( RING );
  layer2.set_boundary(800,1000);
  
  var layer3 = new PLayer(Jelly);
  layer3.mode( SWIRL(2) );
  layer3.set_boundary(100, 1000);

  var layer4 = new PLayer (middle,color(27, 31, 41));
  layer4.mode(SWIRL (2));
  layer4.set_boundary (0,200);

  var layer5 = new PLayer (bubbles)
  layer5.mode(RING);
  layer5.set_boundary (300,500);
  
}


function outer (x, y, animation,pScope){



}

function Jelly (x,y,animation,pScope){

 pScope.draw_image_from_sequence("jelly", 0, 0, int(animation.frame*7) );





}

function middle (x,y,animation, pScope){

  
}
function bubbles (x,y,animation,pScope){

ellipse (400*animation.frame,400,30,30)
ellipse (300*animation.frame,500,30,30)
ellipse (450*animation.frame,300,30,30)
}


//use recordings to learn spinning objects and colour changes