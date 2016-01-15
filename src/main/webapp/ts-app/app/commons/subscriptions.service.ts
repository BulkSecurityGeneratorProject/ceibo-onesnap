/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="isubscriptions.service.ts" />

module AngularTest {
    'use strict';

    export class StreamsService implements IStreamsService {
    
        public defaultEvents = {
            "OBJECT_CREATE": "ocreated",
            "OBJECT_DELETE": "odeleted",
            "OBJECT_UPDATE": "oupdated",
            "COLLECTION_LOADED": "cloaded",
            "OBJECT_LOAD": "oloaded",
            "COLLECTION_OBJECT_REMOVED": "coremoved"
        };
    
        private generalListeners = [];
    
        private streams = {};
    
        /** @ngInject */
        constructor() {
        }
    
        setStream(streamKey: string, stream: any) {
            if (!this.streams[streamKey]) {
                this.streams[streamKey] = stream;
                this.generalListeners.forEach(function(listener) {
                    listener.onNext(stream);
                });
            }
        }
    
        setGeneralListener(thread: any) {
            this.generalListeners.push(thread);
        }
    
        getGeneralListener() {
        }
    
        getStream(streamKey: string) {
            if (!this.streams[streamKey]) {
                this.setStream(streamKey, new Rx.Subject<{}>());
            }
            return this.streams[streamKey];
        }
    
        getStreams() {
            return this.streams;
        }
    }
    
    angular.module('angularTest')
        .service('StreamsService', StreamsService);
}