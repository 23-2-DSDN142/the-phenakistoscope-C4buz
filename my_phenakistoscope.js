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


 let coral_base_colour = "#143752" // this is stopping it from working?
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
  layer4.mode(SWIRL(1));
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
  
  push() 
  scale (0.017)

  pScope.draw_image_from_sequence("fish",4000-animation.wave()*600,-20000, animation.frame);
  pScope.draw_image_from_sequence("fish",0-animation.wave()*600,-17000, animation.frame);
  pScope.draw_image_from_sequence("fish",-2000-animation.wave()*600,-19000, animation.frame);

  pop()
 
  

}

function coral_plants (x,y,animation,pScope){
  
  push()
  scale (0.10)
  pScope.draw_image_from_sequence("grass", 0-animation.wave()*10, 2200, animation.frame);
  pop ()
  
  push()
  scale (0.11)
  pScope.draw_image("coralblue",150-animation.wave()*10,1750);
  pop ()
  
  // push()
  // scale (0.13)
  // pScope.draw_image("coralpinksmall",0-animation.wave()*10,1200);
  // pop ()

}

function middle (x,y,animation, pScope){
 
  pScope.fill_background (20, 55, 82)
  
}
//use recordings to learn spinning objects and colour changes