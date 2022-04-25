import { Component, OnInit, OnDestroy, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy,DoCheck,OnChanges {
  ngOnChanges(changes :SimpleChanges): void {
    console.log("Ng On Changes Method Called ..");
  }
 

  constructor() {
    console.log("COnstructor called ........");
  }


  //ngOnInit () is Lifecycle Method in Angular component allows you to run
  //piece of code at different stages of life of component
   ngOnInit() {
    console.log("Init methods ");
  }

  // ngDoCheck () is a callback method that performs custom change-detection
  ngDoCheck(): void {
    console.log(" Do Check Method Called ...");
  }


  // OnDestroy is an Angular lifecycle method, that can hooked into on components 
  // and directives in Angular. By defining a specific method named ngOnDestroy on
  // our class, we are telling the Angular runtime, that it should call our method
  // at the appropriate time
  ngOnDestroy(): void {
    console.log(" DestroyMethod  called ....");
  }
 

}
