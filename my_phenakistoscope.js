const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 100, 600 );

  var layer2 = new Player(outer);
  layer2.mode( RING );
  layer2.set_boundary(0,400);


}

function faces (x,y,animation,pScope){
scale (animation.frame*2);

strokeWeight (0)
fill (94, 130, 94)
ellipse (0,50,80,80) //Outer Circle

fill (225,255,255)
ellipse (0,50,52,52) // Middle White Outline

fill (115, 160, 199)
ellipse (0,50, 50,50) // Middle Circle

fill (177, 192, 204) // Inner Circle
ellipse (0,50,20,20)

}

function outer (x, y, animation, pScope){
let angleOffset = (360 / SLICE_COUNT) / 2
let backgroundArcStart = 270 - angleOffset;
let backgroundArcEnd = 270 + angleOffset;

fill (115, 160, 199)
arc (x,y,800,800,backgroundArcStart,backgroundArcEnd);

fill (255)
rect (-10,-300-animation.wave()*50,20,20)

}