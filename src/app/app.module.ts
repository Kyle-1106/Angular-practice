import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//FormsModuleを追加
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularcomponentComponent } from './angularcomponent/angularcomponent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularcomponentComponent,
    ParentComponent,
    ChildComponent,
    NgOnChangesComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    //FormsModuleを追加
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
