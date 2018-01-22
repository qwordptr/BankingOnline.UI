import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
      SidebarComponent,
      ContentComponent,
      HeaderComponent
  ],
  declarations: [SidebarComponent, HeaderComponent, ContentComponent]
})
export class CoreModule { }
