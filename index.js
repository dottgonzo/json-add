var diff = require("deep-diff");
module.exports = function (original, addon) {
    diff.observableDiff(original, addon, function (d) {
        if (d.kind != 'D') {
            diff.applyChange(original, addon, d);
        }
    });
    return original;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVksSUFBSSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBRWxDLE1BQU0sQ0FBQyxPQUFPLEdBQUMsVUFBUyxRQUFlLEVBQUMsS0FBWTtJQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDO1FBRTlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNqQixDQUFDLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkaWZmIGZyb20gXCJkZWVwLWRpZmZcIjtcblxubW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24ob3JpZ2luYWw6T2JqZWN0LGFkZG9uOk9iamVjdCl7XG4gIGRpZmYub2JzZXJ2YWJsZURpZmYob3JpZ2luYWwsIGFkZG9uLCBmdW5jdGlvbiAoZCkge1xuICAgIC8vIEFwcGx5IGFsbCBjaGFuZ2VzIGV4Y2VwdCB0aG9zZSB0byB0aGUgJ25hbWUnIHByb3BlcnR5Li4uXG4gICAgaWYgKGQua2luZCAhPSAnRCcpIHtcbiAgICAgICAgZGlmZi5hcHBseUNoYW5nZShvcmlnaW5hbCwgYWRkb24sIGQpO1xuICAgIH1cbn0pO1xuICByZXR1cm4gb3JpZ2luYWxcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
