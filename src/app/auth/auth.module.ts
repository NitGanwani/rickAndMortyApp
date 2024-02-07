import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
