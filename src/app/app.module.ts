import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './components/cont.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador:contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
