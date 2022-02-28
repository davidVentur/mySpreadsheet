import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  flag: boolean = false
  constructor() { }

  ngOnInit(): void {

  }

  menuToggle(){
    this.flag = !this.flag
  }



}
