const max_x = 800;
const max_y = 800;
setDocDimensions(max_x, max_y);

const t = new bt.Turtle();
// Change following 3 variables to get different results
const numCircles = 36; 
const radius = 100; 
const rotation = 360 / numCircles; 
// Change above 3 variables to get different results

t.jump([max_x / 2, max_y / 2]); 
for (let i = 0; i < numCircles; i++) {
  t.right(rotation);
  t.jump([max_x / 2, max_y / 2]);
  for (let j = 0; j < 360; j += 10) {
    t.forward(radius);
    t.right(10);
  }
}

drawLines(t.lines());
