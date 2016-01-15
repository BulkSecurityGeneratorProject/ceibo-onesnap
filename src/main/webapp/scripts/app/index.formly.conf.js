/**
 * Created by mmasuyama on 11/6/2015.
 */
/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    'use strict';
    var FormlyConfiguration = (function () {
        /* Formly general configuration sector */
        /** @ngInject */
        function FormlyConfiguration(formlyConfig) {
            formlyConfig.setType({
                name: 'input',
                template: '<md-input-container><label>{{ options.templateOptions.label }}</label> <input ng-model="model[options.key]"></md-input-container>'
            });
            formlyConfig.setType({
                name: 'textarea',
                template: '<md-input-container flex><label>{{ options.templateOptions.label }}</label> <textarea ng-model="model[options.key]"></textarea></md-input-container>'
            });
            formlyConfig.setType({
                name: 'radio',
                template: '<md-radio-group ng-model="model[options.key]"><md-radio-button  class="md-primary" ng-repeat="(key, option) in options.templateOptions.options"id="{{$index}}"value="{{ option.value}}">{{option.name }}</md-radio-button></md-radio-group>'
            });
            formlyConfig.setType({
                name: 'checkbox',
                template: '<md-checkbox ng-model="model[options.key]" aria-label="options.templateOptions.label">{{options.templateOptions.label }}</md-checkbox>'
            });
            formlyConfig.setType({
                name: 'select',
                template: '<md-input-container><label>{{ options.templateOptions.label }}</label><md-select ng-model="model[options.key]"><md-option ng-value="opt[options.templateOptions.selectProperty]" ng-repeat="opt in options.templateOptions.collection">{{ opt[options.templateOptions.displayKey] }}</md-option></md-select></md-input-container>'
            });
            formlyConfig.setType({
                name: 'autocomplete',
                templateUrl: 'scripts/components/formly/formly.autocomplete.html'
            });
        }
        FormlyConfiguration.inject = ['formlyConfig'];
        return FormlyConfiguration;
    })();
    AngularTest.FormlyConfiguration = FormlyConfiguration;
    angular.module('angularTest').run(FormlyConfiguration);
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmZvcm1seS5jb25mLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuRm9ybWx5Q29uZmlndXJhdGlvbiIsIkFuZ3VsYXJUZXN0LkZvcm1seUNvbmZpZ3VyYXRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsK0NBQStDO0FBRS9DLElBQU8sV0FBVyxDQThDakI7QUE5Q0QsV0FBTyxXQUFXLEVBQUMsQ0FBQztJQUNsQkEsWUFBWUEsQ0FBQ0E7SUFFYkEsSUFBYUEsbUJBQW1CQTtRQUk5QkMseUNBQXlDQTtRQUV6Q0EsZ0JBQWdCQTtRQUNoQkEsU0FQV0EsbUJBQW1CQSxDQU9sQkEsWUFBaUJBO1lBQzNCQyxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDbkJBLElBQUlBLEVBQUVBLE9BQU9BO2dCQUNiQSxRQUFRQSxFQUFFQSxtSUFBbUlBO2FBQzlJQSxDQUFDQSxDQUFDQTtZQUVIQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDbkJBLElBQUlBLEVBQUVBLFVBQVVBO2dCQUNoQkEsUUFBUUEsRUFBRUEsc0pBQXNKQTthQUNqS0EsQ0FBQ0EsQ0FBQ0E7WUFFSEEsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxFQUFFQSxPQUFPQTtnQkFDYkEsUUFBUUEsRUFBRUEsNk9BQTZPQTthQUN4UEEsQ0FBQ0EsQ0FBQ0E7WUFFSEEsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxFQUFFQSxVQUFVQTtnQkFDaEJBLFFBQVFBLEVBQUVBLHdJQUF3SUE7YUFDbkpBLENBQUNBLENBQUNBO1lBRUhBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBO2dCQUNuQkEsSUFBSUEsRUFBRUEsUUFBUUE7Z0JBQ2RBLFFBQVFBLEVBQUVBLG1VQUFtVUE7YUFDOVVBLENBQUNBLENBQUNBO1lBRUhBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBO2dCQUNuQkEsSUFBSUEsRUFBRUEsY0FBY0E7Z0JBQ3BCQSxXQUFXQSxFQUFFQSxvREFBb0RBO2FBQ2xFQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtRQW5DTUQsMEJBQU1BLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBb0NuQ0EsMEJBQUNBO0lBQURBLENBdENBRCxBQXNDQ0MsSUFBQUQ7SUF0Q1lBLCtCQUFtQkEsR0FBbkJBLG1CQXNDWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FDeEJBLEdBQUdBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7QUFFaENBLENBQUNBLEVBOUNNLFdBQVcsS0FBWCxXQUFXLFFBOENqQiIsImZpbGUiOiJpbmRleC5mb3JtbHkuY29uZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNi8yMDE1LlxuICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5cbm1vZHVsZSBBbmd1bGFyVGVzdCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBleHBvcnQgY2xhc3MgRm9ybWx5Q29uZmlndXJhdGlvbiB7XG5cbiAgICBzdGF0aWMgaW5qZWN0ID0gWydmb3JtbHlDb25maWcnXTtcblxuICAgIC8qIEZvcm1seSBnZW5lcmFsIGNvbmZpZ3VyYXRpb24gc2VjdG9yICovXG5cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoZm9ybWx5Q29uZmlnOiBhbnkpIHtcbiAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgICAgdGVtcGxhdGU6ICc8bWQtaW5wdXQtY29udGFpbmVyPjxsYWJlbD57eyBvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5sYWJlbCB9fTwvbGFiZWw+IDxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPjwvbWQtaW5wdXQtY29udGFpbmVyPidcbiAgICAgIH0pO1xuXG4gICAgICBmb3JtbHlDb25maWcuc2V0VHlwZSh7XG4gICAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgICAgIHRlbXBsYXRlOiAnPG1kLWlucHV0LWNvbnRhaW5lciBmbGV4PjxsYWJlbD57eyBvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5sYWJlbCB9fTwvbGFiZWw+IDx0ZXh0YXJlYSBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPjwvdGV4dGFyZWE+PC9tZC1pbnB1dC1jb250YWluZXI+J1xuICAgICAgfSk7XG5cbiAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgICAgdGVtcGxhdGU6ICc8bWQtcmFkaW8tZ3JvdXAgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj48bWQtcmFkaW8tYnV0dG9uICBjbGFzcz1cIm1kLXByaW1hcnlcIiBuZy1yZXBlYXQ9XCIoa2V5LCBvcHRpb24pIGluIG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLm9wdGlvbnNcImlkPVwie3skaW5kZXh9fVwidmFsdWU9XCJ7eyBvcHRpb24udmFsdWV9fVwiPnt7b3B0aW9uLm5hbWUgfX08L21kLXJhZGlvLWJ1dHRvbj48L21kLXJhZGlvLWdyb3VwPidcbiAgICAgIH0pO1xuXG4gICAgICBmb3JtbHlDb25maWcuc2V0VHlwZSh7XG4gICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgIHRlbXBsYXRlOiAnPG1kLWNoZWNrYm94IG5nLW1vZGVsPVwibW9kZWxbb3B0aW9ucy5rZXldXCIgYXJpYS1sYWJlbD1cIm9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmxhYmVsXCI+e3tvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5sYWJlbCB9fTwvbWQtY2hlY2tib3g+J1xuICAgICAgfSk7XG5cbiAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIHRlbXBsYXRlOiAnPG1kLWlucHV0LWNvbnRhaW5lcj48bGFiZWw+e3sgb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMubGFiZWwgfX08L2xhYmVsPjxtZC1zZWxlY3QgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj48bWQtb3B0aW9uIG5nLXZhbHVlPVwib3B0W29wdGlvbnMudGVtcGxhdGVPcHRpb25zLnNlbGVjdFByb3BlcnR5XVwiIG5nLXJlcGVhdD1cIm9wdCBpbiBvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5jb2xsZWN0aW9uXCI+e3sgb3B0W29wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRpc3BsYXlLZXldIH19PC9tZC1vcHRpb24+PC9tZC1zZWxlY3Q+PC9tZC1pbnB1dC1jb250YWluZXI+J1xuICAgICAgfSk7XG5cbiAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgbmFtZTogJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1seS9mb3JtbHkuYXV0b2NvbXBsZXRlLmh0bWwnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QnKVxuICAgICAgLnJ1bihGb3JtbHlDb25maWd1cmF0aW9uKTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=