const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jelly","png",7)
  
}

function setup_layers(pScope){

  new PLayer(null, 52, 75, 138);  //lets us draw the whole circle background, ignoring the boundaries
  
  var Rim = new PLayer(outer,color(143, 160, 207) );
  Rim.mode( RING );
  Rim.set_boundary(950,1000);

  // var layer4 = new PLayer (bubbles)
  // layer4.mode(SWIRL(2));
  // layer4.set_boundary (100,1000);

  var Fish = new PLayer (fish)
  Fish.mode(RING)
  Fish.set_boundary (0,1000)

  var JellyFish = new PLayer(Jelly);
  JellyFish.mode( SWIRL(2) );
  JellyFish.set_boundary(100, 1000);

  var coral = new PLayer (middle,color(27, 31, 41));
  coral.mode(SWIRL (2));
  coral.set_boundary (0,200);

  var Light = new PLayer (light)
  Light.mode(RING)
  Light.set_boundary (0,1000)

 
  
}


function outer (x, y, animation,pScope){



}

function Jelly (x,y,animation,pScope){

 pScope.draw_image_from_sequence("jelly", 0, 0, int(animation.frame*7) );





}

function middle (x,y,animation, pScope){

  
}
function bubbles (x,y,animation,pScope){

ellipse (150*animation.frame,90,30,30)
ellipse (100*animation.frame,100,30,30)
ellipse (90*animation.frame,110,30,30)
}

function fish (x,y,animation,pScope){
  fill (245, 139, 69)
  ellipse (500,150-animation.wave()*30,20,50)

  fill (230, 223, 218)
  ellipse (700,10-animation.wave()*30,20,50)

}

function light(x,y,animation,pScope){
  strokeWeight (0)
  fill (201, 216, 255)
  triangle (-40,-1000,0,0-animation.wave()*100,40,-1000) 
}
//use recordings to learn spinning objects and colour changes