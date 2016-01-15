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
    angular.module('angularTest')
        .run(FormlyConfiguration);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=index.formly.conf.js.map