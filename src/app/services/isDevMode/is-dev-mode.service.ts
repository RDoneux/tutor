import { Injectable, isDevMode } from '@angular/core';

/* This service exists only to provide spy capabilities for the isDevMode 
functionality within @angular/core */

@Injectable({
  providedIn: 'root',
})
export class IsDevModeService {
  constructor() {}

  isDevMode(): boolean {
    return isDevMode();
  }
}
