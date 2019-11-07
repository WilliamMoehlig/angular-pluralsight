import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, WelcomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // 404 not found
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ]),
    ProductsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
