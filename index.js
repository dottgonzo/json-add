var diff=require('deep-diff')

module.exports=function(original,addon){
  diff.observableDiff(original, addon, function (d) {
    // Apply all changes except those to the 'name' property...
    if (d.kind != 'D') {
        diff.applyChange(original, addon, d);
    }
});
  return original
}
