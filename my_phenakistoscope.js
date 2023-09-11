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
  pScope.load_image("coralgreen", "png");
  pScope.load_image("coralpurple", "png");
  pScope.load_image("gradient", "png");
}

function setup_layers(pScope){
 
  new PLayer(null, 14, 99, 125);  //lets us draw the whole circle background, ignoring the boundaries
  
  var detail = new PLayer (gradientB);
  detail.mode
  detail.set_boundary (0,1000);

  var JellyFish = new PLayer(Jelly);
  JellyFish.mode( RING );
  JellyFish.set_boundary(0, 1000);

  var layer4 = new PLayer (bubbles)
  layer4.mode(SWIRL (2));
  layer4.set_boundary (200,850);

  var orangefish = new PLayer (orange_fish);
  orangefish.mode(RING)
  orangefish.set_boundary (0,1000)

 var plantscentre = new PLayer (coral_plants);
  plantscentre.mode (RING)
  plantscentre.set_boundary (0,1000);

  var coral_centre = new PLayer (middle);
  coral_centre.mode
  coral_centre.set_boundary (0,160);

  var pale_edge = new PLayer (edge);
  pale_edge.mode
  pale_edge.set_boundary (950,1000);
  
 
}

function gradientB (x,y,animation,pScope){
 push ()
 scale (0.9)
 pScope.draw_image("gradient",0,-550-animation.wave()*15);
 pop()
}

function Jelly (x,y,animation,pScope){
 scale (0.15)
 pScope.draw_image_from_sequence("jelly", 0, 4300-animation.wave()*200, animation.frame);
  
}
function bubbles (x,y,animation,pScope){

let end_colour = color(114, 146, 156)
let start_colour = color(255,255,255)
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
  scale (0.015)

  pScope.draw_image_from_sequence("fish",6000-animation.wave()*600,-20000, animation.frame);
  pScope.draw_image_from_sequence("fish",0-animation.wave()*600,-20000, animation.frame);
  pScope.draw_image_from_sequence("fish",-5000-animation.wave()*600,-17000, animation.frame);

  pop()

  push() 
  scale (0.017)

  pScope.draw_image_from_sequence("fish",-10000-animation.wave()*600,-60000, animation.frame);
  pScope.draw_image_from_sequence("fish",12000-animation.wave()*600,-60000, animation.frame);
  pScope.draw_image_from_sequence("fish",0-animation.wave()*600,-62000, animation.frame);

  pop()
 
  

}

function coral_plants (x,y,animation,pScope){
  
  push()
  scale (0.10)
  pScope.draw_image_from_sequence("grass", 0-animation.wave()*10, 2200, animation.frame);
  pop ()
  
  push()
  scale (0.12)
  pScope.draw_image("coralblue",150-animation.wave()*10,1500);
  pop ()

  
 }

function middle (x,y,animation, pScope){
 
  pScope.fill_background (20, 55, 82)
  
}

function edge (x,y,animation, pScope){

pScope.fill_background (132, 177, 191)
  
}


//use recordings to learn spinning objects and colour changes