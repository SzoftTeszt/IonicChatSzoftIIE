import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SendComponent } from './send/send.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, ChatMessagesComponent, SendComponent, MessagesComponent],
  imports: [FormsModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
