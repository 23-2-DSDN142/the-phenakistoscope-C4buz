const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary(100, 600);
  
  var layer2 = new PLayer(outer,color(116, 150, 125) );
  layer2.mode( RING );
  layer2.set_boundary(650,1000);

  // var layer3 = new PLayer(dots);
  // layer3.mode( SWIRL(5) );
  // layer3.set_boundary(100, 600);
  
}

function faces (x,y,animation,pScope){
scale (animation.frame*2);

strokeWeight (0)
fill (116, 150, 125)
ellipse (0,50,80,80) //Outer Circle

}

function outer (x, y, animation,pScope){
fill (0)
ellipse (-10,-830-animation.wave()*50,50,200)


}

function dots (x,y,animation,pScope){
scale (animation.frame*2);

strokeweight (0)
fill (255,255,255)
ellipse (0,50,10,10)

}

//use recordings to learn spinning objects and colour changes