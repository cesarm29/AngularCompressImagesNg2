//generic libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//router
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
//lib image
import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageCompressService,ResizeOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
