import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationInitService } from './services/application-init/application-init.service';
import { NavBarModule } from './modules/user-interface/nav-bar/nav-bar.module';

const applicationInit =
  (applicationInitService: ApplicationInitService) => (): Promise<any> =>
    applicationInitService.init();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavBarModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInit,
      deps: [ApplicationInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
