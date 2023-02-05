import { Component, OnInit } from '@angular/core';
import { CorporateActionService } from './corporate-action.service';

@Component({
selector: 'app-corporate-action',
templateUrl: './corporate-action.component.html',
styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {

corporates: any;

constructor(private corporateService : CorporateActionService) { }

ngOnInit(): void {
this.corporates = this.corporateService.corporates;
}

}
