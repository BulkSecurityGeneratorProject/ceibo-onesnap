// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            '../bower_components/modernizr/modernizr.js',
            '../bower_components/jquery/dist/jquery.js',
            '../bower_components/angular/angular.js',
            '../bower_components/angular-loading-bar/build/loading-bar.js',
            '../bower_components/handlebars/handlebars.js',
            '../bower_components/datatables/media/js/jquery.dataTables.js',
            '../bower_components/angular-datatables/dist/angular-datatables.js',
            '../bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js',
            '../bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js',
            '../bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
            '../bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js',
            '../bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js',
            '../bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
            '../bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js',
            '../bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js',
            '../bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js',
            '../bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
            '../bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
            '../bower_components/json3/lib/json3.js',
            '../bower_components/angular-sanitize/angular-sanitize.js',
            '../bower_components/mobile-detect/mobile-detect.js',
            '../bower_components/angular-simple-logger/dist/angular-simple-logger.js',
            '../bower_components/lodash/lodash.js',
            '../bower_components/angular-google-maps/dist/angular-google-maps.js',
            '../bower_components/angular-local-storage/dist/angular-local-storage.js',
            '../bower_components/angular-aria/angular-aria.js',
            '../bower_components/angular-cache-buster/angular-cache-buster.js',
            '../bower_components/rangy/rangy-core.js',
            '../bower_components/rangy/rangy-classapplier.js',
            '../bower_components/rangy/rangy-highlighter.js',
            '../bower_components/rangy/rangy-selectionsaverestore.js',
            '../bower_components/rangy/rangy-serializer.js',
            '../bower_components/rangy/rangy-textrange.js',
            '../bower_components/textAngular/dist/textAngular.js',
            '../bower_components/textAngular/dist/textAngular-sanitize.js',
            '../bower_components/textAngular/dist/textAngularSetup.js',
            '../bower_components/angular-upload/angular-upload.js',
            '../bower_components/angular-translate/angular-translate.js',
            '../bower_components/angular-touch/angular-touch.js',
            '../bower_components/angular-cookies/angular-cookies.js',
            '../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            '../bower_components/chartist/dist/chartist.min.js',
            '../bower_components/angular-chartist.js/dist/angular-chartist.js',
            '../bower_components/moment/moment.js',
            '../bower_components/fullcalendar/dist/fullcalendar.js',
            '../bower_components/angular-ui-calendar/src/calendar.js',
            '../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            '../bower_components/datatables-responsive/js/dataTables.responsive.js',
            '../bower_components/highlightjs/highlight.pack.js',
            '../bower_components/angular-animate/angular-animate.js',
            '../bower_components/momentjs/moment.js',
            '../bower_components/humanize-duration/humanize-duration.js',
            '../bower_components/angular-timer/dist/angular-timer.js',
            '../bower_components/object.observe/dist/object-observe.min.js',
            '../bower_components/angular-smart-table/dist/smart-table.js',
            '../bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
            '../bower_components/angular-resource/angular-resource.js',
            '../bower_components/sockjs-client/dist/sockjs.js',
            '../bower_components/stomp-websocket/lib/stomp.min.js',
            '../bower_components/api-check/dist/api-check.js',
            '../bower_components/angular-formly/dist/formly.js',
            '../bower_components/angular-material/angular-material.js',
            '../bower_components/d3/d3.js',
            '../bower_components/c3/c3.js',
            '../bower_components/c3-angular/c3-angular.min.js',
            '../bower_components/nvd3/build/nv.d3.js',
            '../bower_components/angular-nvd3/dist/angular-nvd3.js',
            '../bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js',
            '../bower_components/perfect-scrollbar/js/perfect-scrollbar.js',
            '../bower_components/ng-file-upload/ng-file-upload.js',
            '../bower_components/angular-messages/angular-messages.js',
            '../bower_components/Chart.js/Chart.js',
            '../bower_components/angular-chart.js/dist/angular-chart.js',
            '../bower_components/Sortable/Sortable.js',
            '../bower_components/Sortable/ng-sortable.js',
            '../bower_components/Sortable/knockout-sortable.js',
            '../bower_components/Sortable/react-sortable-mixin.js',
            '../bower_components/messageformat/messageformat.js',
            '../bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
            '../bower_components/ng-file-upload-shim/ng-file-upload-shim.js',
            '../bower_components/rxjs/dist/rx.all.js',
            '../bower_components/toastr/toastr.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-ui-router/release/angular-ui-router.js',
            '../bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
            '../bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
            '../bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
            // endbower
            'main/webapp/scripts/app/app.js',
            'main/webapp/scripts/app/**/*.js',
            'main/webapp/scripts/components/**/*.+(js|html)',
            'test/javascript/spec/helpers/module.js',
            'test/javascript/spec/helpers/httpBackend.js',
            'test/javascript/**/!(karma.conf|protractor.conf).js'
        ],


        // list of files / patterns to exclude
        exclude: ['test/javascript/e2e/**'],

        preprocessors: {
            './**/*.js': ['coverage']
        },

        reporters: ['dots', 'jenkins', 'coverage', 'progress'],

        jenkinsReporter: {
            
            outputFile: '../target/test-results/karma/TESTS-results.xml'
        },

        coverageReporter: {
            
            dir: '../target/test-results/coverage',
            reporters: [
                {type: 'lcov', subdir: 'report-lcov'}
            ]
        },

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // to avoid DISCONNECTED messages when connecting to slow virtual machines
        browserDisconnectTimeout : 10000, // default 2000
        browserDisconnectTolerance : 1, // default 0
        browserNoActivityTimeout : 4*60*1000 //default 10000
    });
};
