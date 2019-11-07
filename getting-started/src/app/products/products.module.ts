import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ProductsDetailGuard } from './products-detail.guard';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [ProductsListComponent, ProductsDetailComponent, ConvertToSpacesPipe],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id', component: ProductsDetailComponent, canActivate: [ProductsDetailGuard] },
    ]),
    SharedModule,
  ],
})
export class ProductsModule {}
