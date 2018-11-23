import { Component,Input,OnInit,Output } from '@angular/core';

@Component({
  selector: 'custom-allowance-info',
  templateUrl: './allowance-info.component.html',
  styleUrls: ['./allowance-info.component.scss']
})
export class AllowanceInfoComponent implements OnInit {

	@Input() dataAuthoring:string;

	@Input() authorMode;
	authoringValue;

  	constructor() { 
  }
  ngOnInit(){
  	this.authoringValue =JSON.parse(this.dataAuthoring);
  }
}
