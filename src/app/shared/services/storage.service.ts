import { Injectable } from '@angular/core';
import { values } from 'lodash';
import { AbstractStorage } from './abstract-storage';

@Injectable()
export class StorageService extends AbstractStorage {

  constructor() { 
    super();
  }

  save(property: string, value: string | object): void {
    const valueString = typeof value === 'object'? super.cast(value) : value;
    sessionStorage.setItem(property, valueString);
  }

  get(property: string): string | null{
    return sessionStorage.getItem(property);
  }
  
  clear(): void {
    sessionStorage.clear();
  }

}
