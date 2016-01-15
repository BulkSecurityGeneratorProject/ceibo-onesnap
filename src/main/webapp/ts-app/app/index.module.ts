/// <reference path="../../typings/tsd.d.ts" />

module AngularTest {
    'use strict';

    angular.module('angularTest', [
        "app.core",
        "app.navigation",
        "app.toolbar",
        "angularTest.dashboard",
        "angularTest.components.entities",
        "angularTest.settings",
        "angularTest.auth",
        "angularTest.teacher",
        "angularTest.student",
        "angularTest.course"
    ]);
}
