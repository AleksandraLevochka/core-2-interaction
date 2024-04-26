function setup() {
    createCanvas(windowWidth, windowHeight);
    background(241, 255, 133)
  }
  
  function draw() {

    // circle left
    noStroke();
    fill(92, 52, 201);
    ellipse(450, 300, 420);

    // circle smaller 1
    noStroke();
    fill(252, 251, 244);
    ellipse(350, 300, 200);

    // mouth
    fill(147, 133, 255);
    ellipse(700, 500, 90, 35, 15);

    // circle right
    noStroke();
    fill(92, 52, 201);
    ellipse(990, 300, 420);

    // circle smaller 2
    noStroke();
    fill(252, 251, 244);
    ellipse(890, 300, 200);

  }

