import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule} from './test/test.module';
import { UserComponent } from './user/user.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent    /// came from user component
  ],
  imports: [
    BrowserModule,
    TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
