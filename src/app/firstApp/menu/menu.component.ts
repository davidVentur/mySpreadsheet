import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  flag: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.changeColorIcon()
  }

  menuToggle() {
    this.flag = !this.flag;
  }

  changeColorIcon(){
    const list = document.querySelectorAll('.list');
    function activateLink(this: any) {
      list.forEach((item) => item.classList.remove('active'));

      this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click', activateLink));
  }
}
