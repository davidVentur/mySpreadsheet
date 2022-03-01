import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  list = document.querySelectorAll('.list');

  flag: boolean = false
  classList: any;
  constructor() { }

  ngOnInit(): void {
    this.activeLink()
  }

  menuToggle(){
    this.flag = !this.flag
  }

  activeLink(){
    
  }


}
