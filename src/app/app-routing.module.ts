import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProductItemComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'product/:id', component: ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
