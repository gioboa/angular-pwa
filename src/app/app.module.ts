import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { PushService } from './services/push.service';
import { ControlPushComponent } from './components/control-push/control-push.component';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ControlPushComponent],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [PushService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
