const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jelly","png",10)
  pScope.load_image("fish_1" , "png");
  pScope.load_image("coral", "png");
  pScope.load_image("Background" , "png");
  
}

function setup_layers(pScope){

  new PLayer(null, 52, 75, 138);  //lets us draw the whole circle background, ignoring the boundaries
  
  // var background = new PLayer (Background)
    
  // var Rim = new PLayer(outer,color(143, 160, 207) );
  // Rim.mode( RING );
  // Rim.set_boundary(950,1000);

  // var whitefish = new PLayer (white_fish)
  // whitefish.mode(RING)
  // whitefish.set_boundary (0,1000)

  var JellyFish = new PLayer(Jelly);
  JellyFish.mode( RING );
  JellyFish.set_boundary(0, 1000);

  var layer4 = new PLayer (bubbles)
  layer4.mode(SWIRL(3));
  layer4.set_boundary (1,800);

  var orangefish = new PLayer (orange_fish)
  orangefish.mode(RING)
  orangefish.set_boundary (0,1000)

  var coral_centre = new PLayer (middle);
  coral_centre.mode(SWIRL (2));
  coral_centre.set_boundary (0,200);

  // var Light = new PLayer (light)
  // Light.mode(RING)
  // Light.set_boundary (0,1000)

  
  
}

function Background (x,y,animation,pScope){
  push()
  scale (0.4)
  pScope.draw_image("Background",0,0);
  pop()

}
function outer (x, y, animation,pScope){



}
function Jelly (x,y,animation,pScope){
 push()
 rotate (180)
 scale (0.9)
 pop()
 pScope.draw_image_from_sequence("jelly", 0, 700, animation.frame);
  
}
function middle (x,y,animation, pScope){
  scale (0.3)
  // pScope.draw_image("coral",0,0);
}
function bubbles (x,y,animation,pScope){
let start_colour = color(255,255,255)
let end_colour = color(52,75,138)
let animating_colour = lerpColor(start_colour,end_colour,animation.frame)
fill (animating_colour)
scale (0.6)
ellipse (-80,0-animation.wave()*100,30,30)
ellipse (0,40-animation.wave()*100,30,30)
ellipse (80,0-animation.wave()*100,30,30)
}
function orange_fish (x,y,animation,pScope){
  push()
  scale (0.02)
  pScope.draw_image("fish_1",0-animation.wave()*600,-20000);
  pScope.draw_image("fish_1",4000-animation.wave()*600,-18000);
  pScope.draw_image("fish_1",-2000-animation.wave()*600,-15000);
  pop()
  // fill (245, 139, 69)
  // ellipse (500,150-animation.wave()*30,20,50)
  // ellipse (450,100-animation.wave()*30,20,50)
  // ellipse (400,200-animation.wave()*30,20,50)

}
function white_fish (x,y,animation,pScope){
  
  fill (230, 223, 218)
  ellipse (900,10-animation.wave()*30,20,50)
  ellipse (850,110-animation.wave()*30,20,50)

}
function light(x,y,animation,pScope){
  strokeWeight (0)
  fill (201, 216, 255)
  triangle (-40,-1000,0,0-animation.wave()*100,40,-1000) 
}

//use recordings to learn spinning objects and colour changes