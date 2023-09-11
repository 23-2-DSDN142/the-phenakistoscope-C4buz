const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image_sequence("jelly","png",10)
  pScope.load_image_sequence("grass","png",2)
  pScope.load_image_sequence("fish","png",2)

  pScope.load_image("coral", "png");
  pScope.load_image("coralbluegreen", "png");
  pScope.load_image("coralpinksmall", "png");
  pScope.load_image("coralblue", "png");
}

function setup_layers(pScope){
 
  new PLayer(null, 39, 99, 145);  //lets us draw the whole circle background, ignoring the boundaries
  
  var orangefish = new PLayer (orange_fish);
  orangefish.mode(RING)
  orangefish.set_boundary (0,1000)
 
  var JellyFish = new PLayer(Jelly);
  JellyFish.mode( RING );
  JellyFish.set_boundary(0, 1000);

   var plantscentre = new PLayer (coral_plants);
  plantscentre.mode (RING)
  plantscentre.set_boundary (0,1000);
  
  var layer4 = new PLayer (bubbles)
  layer4.mode(SWIRL (1));
  layer4.set_boundary (200,500);

  var coral_centre = new PLayer (middle);
  coral_centre.mode
  coral_centre.set_boundary (0,175);
}

function outer (x, y, animation,pScope){



}
function Jelly (x,y,animation,pScope){
 scale (0.15)
 pScope.draw_image_from_sequence("jelly", 0, 4500-animation.wave()*200, animation.frame);
  
}
function bubbles (x,y,animation,pScope){

let backgroundcolour = ("39, 99, 145")

let end_colour = color(backgroundcolour)
let start_colour = color(52,75,138)
let animating_colour = lerpColor(start_colour,end_colour,animation.frame)

stroke (animating_colour)
strokeWeight (2)
noFill()

let bubblesize = 30
let bubbleshine = 8

push()
scale (0.7)

ellipse (-80,0-animation.wave()*100,bubblesize,bubblesize) // Outer Ring
ellipse (0,40-animation.wave()*100,bubblesize,bubblesize)
ellipse (80,0-animation.wave()*100,bubblesize,bubblesize)
  
ellipse (-76,-2-animation.wave()*100,bubbleshine,bubbleshine) // Inner Ring
ellipse (4,38-animation.wave()*100,bubbleshine,bubbleshine)
ellipse (84,-2-animation.wave()*100,bubbleshine,bubbleshine)
pop()

}
function orange_fish (x,y,animation,pScope){
  
  push() 
  scale (0.017)

  pScope.draw_image_from_sequence("fish",6000-animation.wave()*600,-20000, animation.frame);
  pScope.draw_image_from_sequence("fish",0-animation.wave()*600,-20000, animation.frame);
  pScope.draw_image_from_sequence("fish",-5000-animation.wave()*600,-17000, animation.frame);

  pop()
 
  

}

function coral_plants (x,y,animation,pScope){
  
  push()
  scale (0.10)
  pScope.draw_image_from_sequence("grass", 0-animation.wave()*10, 2200, animation.frame);
  pop ()
  
  push()
  scale (0.11)
  pScope.draw_image("coralblue",150-animation.wave()*10,1800);
  pop ()
  
 }

function middle (x,y,animation, pScope){
 
  pScope.fill_background (20, 55, 82)
  
}
//use recordings to learn spinning objects and colour changes