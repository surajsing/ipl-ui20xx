import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SattebaazCacheService {

  cachedData: any;

  constructor() { }

  setData(anyData: any) {
    this.cachedData = anyData;
  }

  getData() {
    return this.cachedData;
  }

}
