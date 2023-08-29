const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
<<<<<<< Updated upstream
  pScope.load_image_sequence("jelly1.png","png",1)
  pScope.load_image_sequence("jelly2.png","png",2)
  pScope.load_image_sequence("jelly3.png","png",3)
  pScope.load_image_sequence("jelly4.png","png",4)
  pScope.load_image_sequence("jelly5.png","png",5)
  pScope.load_image_sequence("jelly6.png","png",6)
  pScope.load_image_sequence("jelly7.png","png",7)
=======
  pScope.load_image("Heart","png");
>>>>>>> Stashed changes
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Jelly);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary(100, 600);
  
<<<<<<< Updated upstream
  var layer2 = new PLayer(outer,color(172, 204, 232) );
  layer2.mode( RING );
  layer2.set_boundary(650,1000);

=======
  var layer2 = new PLayer(outer,color(189, 121, 102) );
  layer2.mode( RING );
  layer2.set_boundary(650,1000);

 var layer3 = new PLayer (hearts);
 layer3.mode (SWIRL(2));
 layer3.set_boundary(100,1000);
>>>>>>> Stashed changes
  
}

function Jelly (x,y,animation,pScope){
pScope.draw_image_from_sequence("jelly1.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly2.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly3.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly4.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly5.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly6.png","png", x, y, animation.frame);
pScope.draw_image_from_sequence("jelly7.png","png", x, y, animation.frame);

<<<<<<< Updated upstream
=======
strokeWeight (0)
fill (189, 121, 102)
ellipse (0,50,80,80) //Outer Circle
>>>>>>> Stashed changes

}

function outer (x, y, animation,pScope){



}

<<<<<<< Updated upstream

=======
function hearts (x,y,animation,pScope){
scale (0.2)
  pScope.draw_image("Heart",x,y);


}
>>>>>>> Stashed changes



//use recordings to learn spinning objects and colour changes