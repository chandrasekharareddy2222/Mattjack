import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../../../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodePreviewModule } from '../../../partials/content/general/code-preview/code-preview.module';
import { PartialsModule } from '../../../partials/partials.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';
import { MatTabsModule,MatDividerModule } from '@angular/material';

import { ProductComponent } from './product.component';
import { GeneralComponent } from './general/general.component';
import { PriceComponent } from './price/price.component';
import { MetainformationComponent } from './metainformation/metainformation.component';
import { ActivefromComponent } from './activefrom/activefrom.component';
import { ImagesComponent } from './images/images.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CategoriesComponent } from './categories/categories.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { RelatedproductComponent } from './relatedproduct/relatedproduct.component';
import { UpsellComponent } from './upsell/upsell.component';
import { CrossellsComponent } from './crossells/crossells.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes : Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path:'general',
        component: GeneralComponent
      },
      {
        path:'price',
        component:PriceComponent
      },
      {
        path:'metainformation',
        component:MetainformationComponent
      },
      {
        path:'activefrom',
        component:ActivefromComponent
      },
      {
        path:'images',
        component:ImagesComponent
      },
      {
        path:'inventory',
        component:InventoryComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      {
        path:'manageproduct',
        component:ManageproductComponent
      },
      {
        path:'relatedproduct',
        component:RelatedproductComponent,
      },
      {
        path:'upsell',
        component:UpsellComponent
      },
      {
        path:'crossells',
        component:CrossellsComponent
      },
      {
        path:'reviews',
        component:ReviewsComponent        
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    PartialsModule,
    NgbModule,
    CodePreviewModule,
    MaterialPreviewModule,
    MatTabsModule,
    MatDividerModule,
  ],
  exports: [RouterModule],
  declarations: [
    ProductComponent,
    GeneralComponent,
    PriceComponent,
    MetainformationComponent,
    ActivefromComponent,
    ImagesComponent,
    InventoryComponent,
    CategoriesComponent,
    ManageproductComponent,
    RelatedproductComponent,
    UpsellComponent,
    CrossellsComponent,
    ReviewsComponent,
  ]
})
export class ProductModule { }
