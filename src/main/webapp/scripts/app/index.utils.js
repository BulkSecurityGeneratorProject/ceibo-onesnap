/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var TemplateUtils = (function () {
        function TemplateUtils($compile) {
            this.$compile = $compile;
            this.TableActionButtons = function (data, type, full, meta) {
                return '<a  class="md-fab md-mini md-accent" ui-sref="app.teachers.edit({id :' + data.id + '})">' + 'Editar' + '</a>';
            };
        }
        return TemplateUtils;
    })();
    AngularTest.TemplateUtils = TemplateUtils;
    angular.module('angularTest').service('TemplateUtils', TemplateUtils);
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnV0aWxzLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuVGVtcGxhdGVVdGlscyIsIkFuZ3VsYXJUZXN0LlRlbXBsYXRlVXRpbHMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLFdBQVcsQ0FlakI7QUFmRCxXQUFPLFdBQVcsRUFBQyxDQUFDO0lBQ25CQSxJQUFhQSxhQUFhQTtRQUV6QkMsU0FGWUEsYUFBYUEsQ0FFTEEsUUFBNEJBO1lBQTVCQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFvQkE7WUFFaERBLHVCQUFrQkEsR0FBR0EsVUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQzNDQSxNQUFNQSxDQUFDQSx1RUFBdUVBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLEdBQzlGQSxRQUFRQSxHQUNJQSxNQUFNQSxDQUFDQTtZQUN2QkEsQ0FBQ0EsQ0FBQUE7UUFOb0RBLENBQUNBO1FBUXZERCxvQkFBQ0E7SUFBREEsQ0FWQUQsQUFVQ0MsSUFBQUQ7SUFWWUEseUJBQWFBLEdBQWJBLGFBVVpBLENBQUFBO0lBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQzNCQSxPQUFPQSxDQUFDQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtBQUMzQ0EsQ0FBQ0EsRUFmTSxXQUFXLEtBQVgsV0FBVyxRQWVqQiIsImZpbGUiOiJpbmRleC51dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxubW9kdWxlIEFuZ3VsYXJUZXN0IHtcblx0ZXhwb3J0IGNsYXNzIFRlbXBsYXRlVXRpbHMge1xuXHRcdFxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGNvbXBpbGUgOm5nLklDb21waWxlU2VydmljZSkge1x0XHR9XG5cdFx0XG5cdFx0VGFibGVBY3Rpb25CdXR0b25zID0gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpID0+IHtcblx0XHRcdHJldHVybiAnPGEgIGNsYXNzPVwibWQtZmFiIG1kLW1pbmkgbWQtYWNjZW50XCIgdWktc3JlZj1cImFwcC50ZWFjaGVycy5lZGl0KHtpZCA6JyArIGRhdGEuaWQgKyAnfSlcIj4nXG5cdFx0XHRcdCsgJ0VkaXRhcidcbiAgICAgICAgICAgICAgICArICc8L2E+Jztcblx0XHR9XG5cblx0fVxuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXJUZXN0Jylcblx0XHQuc2VydmljZSgnVGVtcGxhdGVVdGlscycsIFRlbXBsYXRlVXRpbHMpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==