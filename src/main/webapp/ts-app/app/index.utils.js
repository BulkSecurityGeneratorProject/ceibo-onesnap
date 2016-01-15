/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var TemplateUtils = (function () {
        function TemplateUtils($compile) {
            this.$compile = $compile;
            this.TableActionButtons = function (data, type, full, meta) {
                return '<a  class="md-fab md-mini md-accent" ui-sref="app.teachers.edit({id :' + data.id + '})">'
                    + 'Editar'
                    + '</a>';
            };
        }
        return TemplateUtils;
    })();
    AngularTest.TemplateUtils = TemplateUtils;
    angular.module('angularTest')
        .service('TemplateUtils', TemplateUtils);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=index.utils.js.map