import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public objservice:CrudService) { }

  ngOnInit(): void {
    this.objservice.getMemberList();
  }
  fillForm(selectedPP){
    this.objservice.mdata=Object.assign({},selectedPP);
  }

}
