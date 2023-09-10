const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jelly","png",10)
  pScope.load_image("fish_1" , "png");
  pScope.load_image("coral", "png");
  pScope.load_image("Background", "png");
  pScope.load_image("plants", "png");

 let coral_base_colour = "#143752" // this is stopping it from working?
}

function setup_layers(pScope){
   new PLayer(null, 42, 79, 107);  //lets us draw the whole circle background, ignoring the boundaries
  
  // var background = new PLayer (Background)
    
  var orangefish = new PLayer (orange_fish);
  orangefish.mode(RING)
  orangefish.set_boundary (0,1000)
 
  var JellyFish = new PLayer(Jelly);
  JellyFish.mode( RING );
  JellyFish.set_boundary(0, 1000);

  var coral_centre = new PLayer (middle);
  coral_centre.mode
  coral_centre.set_boundary (0,200);

  var coral_edge = new PLayer (edge);
  coral_edge.mode
  coral_edge.set_boundary (940,1000);

  // var plantscentre = new PLayer (coral_plants);
  // plantscentre.mode (RING)
  // plantscentre.set_boundary (0,1000);
  
  var layer4 = new PLayer (bubbles)
  layer4.mode(SWIRL(1));
  layer4.set_boundary (200,500);

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
 scale (0.9)
 pop()
 pScope.draw_image_from_sequence("jelly", 0-animation.wave()*10, 550, animation.frame);
  
}
function middle (x,y,animation, pScope){
 
  pScope.fill_background (20, 55, 82)
  
}
function bubbles (x,y,animation,pScope){

let end_colour = color(255,255,255)
let start_colour = color(52,75,138)
let animating_colour = lerpColor(start_colour,end_colour,animation.frame)
stroke (animating_colour)
strokeWeight (2)
noFill()
push()
scale (0.7)

ellipse (-80,0-animation.wave()*100,30,30) // Outer Ring
ellipse (0,40-animation.wave()*100,30,30)
ellipse (80,0-animation.wave()*100,30,30)

ellipse (-76,-2-animation.wave()*100,8,8) // Inner Ring
ellipse (4,38-animation.wave()*100,8,8)
ellipse (84,-2-animation.wave()*100,8,8)

pop()
}
function orange_fish (x,y,animation,pScope){
  
  // push()
  // scale (0.025)
  // pScope.draw_image("fish_1",0-animation.wave()*600,-35000);
  // pScope.draw_image("fish_1",4000-animation.wave()*600,-37000);
  // pScope.draw_image("fish_1",-000-animation.wave()*600,-37000);
  // pop()

  push() // Original
  scale (0.02)
  pScope.draw_image("fish_1",0-animation.wave()*600,-12000);
  pScope.draw_image("fish_1",4000-animation.wave()*600,-13000);
  // pScope.draw_image("fish_1",-2000-animation.wave()*600,-17000);
  pop()
 
}

function edge (x,y,animation,pScope) {

  pScope.fill_background (20, 55, 82)
}
//use recordings to learn spinning objects and colour changes