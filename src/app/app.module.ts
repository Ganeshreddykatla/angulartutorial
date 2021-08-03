import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule} from './test/test.module';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StyleeventComponent } from './styleevent/styleevent.component';
import { GetVoterPipe } from './get-voter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    StyleeventComponent,
    GetVoterPipe,
// came from user component


  ],
  imports: [
    BrowserModule,
    TestModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
