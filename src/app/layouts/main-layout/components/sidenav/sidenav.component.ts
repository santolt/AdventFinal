import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Interfaces/menu';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menu: Menu[] = [];


  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.loadingMenu();
  }

  loadingMenu(){
    this._menuService.getMenu().subscribe(data => {

      console.log(data);
      this.menu = data
    })
  }

}
