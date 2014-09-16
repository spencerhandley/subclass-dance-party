var StinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, "stinkyDancer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  StinkyDancer.prototype = Object.create(Dancer.prototype);
  StinkyDancer.prototype.constructor= StinkyDancer;
  // console.log(StinkyDancer.prototype)
  StinkyDancer.prototype.step = function(timeBetweenSteps){
    // debugger;

    Dancer.prototype.step.call(this, timeBetweenSteps);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
