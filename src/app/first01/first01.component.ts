import { Component } from '@angular/core';

@Component({
  selector: 'app-first01',
  templateUrl: './first01.component.html',
  styleUrl: './first01.component.css'
})
export class First01Component {
legend ={
  name:'',
  power :0,
  image:''
}
tab_leg : any[]=[];

ajout(){
this.tab_leg.push(this.legend);
this.legend={
  name:'',
  power :0,
  image:''

}
console.log(this.tab_leg);

}
}
