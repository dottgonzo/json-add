import * as diff from "deep-diff";

export = function(original: Object, addon: Object) {
    diff.observableDiff(original, addon, function(d) {
        // Apply all changes except those to the 'name' property...
        if (d.kind !== "D") {
            diff.applyChange(original, addon, d);
        }
    });
    return original;
}
