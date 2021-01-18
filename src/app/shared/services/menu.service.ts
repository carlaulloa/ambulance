import { Injectable } from '@angular/core';
import { IMenu } from './menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: IMenu[] = [
    {
      title: 'Resumen', 
      url: '/dashboard',
      icon: 'tablero'
    },
    {
      title: 'Historias', 
      url: '/histories',
      icon: 'historia'
    },
    {
      title: 'Médicos', 
      url: '/medics',
      icon: 'medico'
    },
    {
      title: 'Pilotos', 
      url: '/drivers',
      icon: 'piloto'
    },
    {
      title: 'Usuarios', 
      url: '/users',
      icon: 'usuario'
    } 
  ];
  constructor() { }

  getMenuList(): IMenu[] {
    return this.menuList;
  }

  getDataPath(path: string): Partial<IMenu> {
    const elementMatched = this.menuList.find(el => path.toLowerCase().indexOf(el.url.toLowerCase()) > -1);
    return {
      title: elementMatched?.title,
      icon: elementMatched?.icon
    }
  }

}
