import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';
import { Menu } from '../../../../Interfaces/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.loadingMenu()
  }

  loadingMenu(){
    this._menuService.getMenu().subscribe(data => {

      console.log(data);
      this.menu = data
    })
  }

}
