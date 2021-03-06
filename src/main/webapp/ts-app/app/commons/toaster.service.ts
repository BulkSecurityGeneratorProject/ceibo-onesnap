/**
 * Created by mmasuyama on 11/10/2015.
 */

/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />

module AngularTest {

  interface IToaster {
    showToaster(notification, type)
  }

  export class ToasterService implements IToaster{
    private toasterStream;
    private arrayObserv;
    private streams;
    private observables;

    /** @ngInject */
    constructor(private  StreamsService: AngularTest.StreamsService, private $mdToast, private $translate) {
      this.toasterStream = new Rx.Subject<{}>();
      this.observables = [];
      this.StreamsService.setGeneralListener(this.toasterStream);

      this.toasterStream.subscribe((observable) => {
        this.observables.push(observable);
        this.streams = Rx.Observable.merge(this.observables);
        this.streams.subscribe((notification) => {
          this.showToaster(notification, 'SUCCESS');
        })
      },(error)=> {
        this.showToaster(error, 'ERROR');
      });
    }

    showToaster(notification, type){
      
      switch(notification.type){
        case('PUT'):
              this.$mdToast.showSimple('Datos actualizados correctamente (texto Hardcodeado)');
              break;
        case('POST'):
          this.$mdToast.showSimple('Datos guardados correctamente (texto Hardcodeado)');
          break;
        case('DELETE'):
          this.$mdToast.showSimple('Datos eliminados correctamente (texto Hardcodeado)');
          break;
      }

    }
    
   
  }
  
  angular.module('angularTest')
  .service('ToasterService', ToasterService);
}
