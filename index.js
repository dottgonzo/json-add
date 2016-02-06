var diff = require("deep-diff");
module.exports = function (original, addon) {
    diff.observableDiff(original, addon, function (d) {
        if (d.kind !== "D") {
            diff.applyChange(original, addon, d);
        }
    });
    return original;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVksSUFBSSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBRWxDLGlCQUFTLFVBQVMsUUFBZ0IsRUFBRSxLQUFhO0lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFTLENBQUM7UUFFM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3BCLENBQUMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRpZmYgZnJvbSBcImRlZXAtZGlmZlwiO1xuXG5leHBvcnQgPSBmdW5jdGlvbihvcmlnaW5hbDogT2JqZWN0LCBhZGRvbjogT2JqZWN0KSB7XG4gICAgZGlmZi5vYnNlcnZhYmxlRGlmZihvcmlnaW5hbCwgYWRkb24sIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gQXBwbHkgYWxsIGNoYW5nZXMgZXhjZXB0IHRob3NlIHRvIHRoZSAnbmFtZScgcHJvcGVydHkuLi5cbiAgICAgICAgaWYgKGQua2luZCAhPT0gXCJEXCIpIHtcbiAgICAgICAgICAgIGRpZmYuYXBwbHlDaGFuZ2Uob3JpZ2luYWwsIGFkZG9uLCBkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvcmlnaW5hbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
