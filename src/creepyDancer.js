var CreepyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, "creepyDancer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  CreepyDancer.prototype = Object.create(Dancer.prototype);
  CreepyDancer.prototype.constructor= CreepyDancer;
  // console.log(CreepyDancer.prototype)
  CreepyDancer.prototype.step = function(timeBetweenSteps){
    // debugger;

    console.log(timeBetweenSteps)
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
