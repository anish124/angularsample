import { Component,OnChanges, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';


@Component({

    selector:'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['/star.component.css']



})
export class StarComponent implements OnChanges{

@Input() rating:number;
starWidth:number;
 

@Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

ngOnChanges(): void{
    this.starWidth=this.rating *86/5;
    console.log(this.starWidth);

}
onClick():void{
    //this.notify.emit('clicked');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
}
}
