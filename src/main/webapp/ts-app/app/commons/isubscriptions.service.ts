module AngularTest {
    'use strict';

    export interface IStreamsService {
    
        setStream(streamKey: string, stream: any);
    
        getStream(streamKey: string);
    
        getStreams();
    }
}