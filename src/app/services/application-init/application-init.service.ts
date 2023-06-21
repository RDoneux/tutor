import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import packageJson from '../../../../package.json';

import dbg from 'debug';
import * as debug from 'debug';
import { IsDevModeService } from '../is-dev-mode/is-dev-mode.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationInitService {
  async init(): Promise<any> {
    this.initDebug();
    return true;
  }

  constructor(private devModeService: IsDevModeService) {}

  private initDebug() {
    dbg.enable(
      environment.debug
        .map((namespace: string) => `tutorLog: ${namespace}`)
        .join(',')
    );
    const welcome = debug('Application');
    welcome(`Name: ${packageJson.name}`);
    welcome(
      `Version: ${packageJson.version}
      `
    );
    welcome(
      `State: ${this.devModeService.isDevMode() ? 'Development' : 'Production'}`
    );
  }
}
