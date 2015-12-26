var diff = require("deep-diff");
module.exports = function (original, addon) {
    diff.observableDiff(original, addon, function (d) {
        if (d.kind != 'D') {
            diff.applyChange(original, addon, d);
        }
    });
    return original;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVksSUFBSSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBRWxDLGlCQUFPLFVBQVMsUUFBZSxFQUFDLEtBQVk7SUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztRQUU5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGlmZiBmcm9tIFwiZGVlcC1kaWZmXCI7XG5cbmV4cG9ydD1mdW5jdGlvbihvcmlnaW5hbDpPYmplY3QsYWRkb246T2JqZWN0KXtcbiAgZGlmZi5vYnNlcnZhYmxlRGlmZihvcmlnaW5hbCwgYWRkb24sIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gQXBwbHkgYWxsIGNoYW5nZXMgZXhjZXB0IHRob3NlIHRvIHRoZSAnbmFtZScgcHJvcGVydHkuLi5cbiAgICBpZiAoZC5raW5kICE9ICdEJykge1xuICAgICAgICBkaWZmLmFwcGx5Q2hhbmdlKG9yaWdpbmFsLCBhZGRvbiwgZCk7XG4gICAgfVxufSk7XG4gIHJldHVybiBvcmlnaW5hbFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
