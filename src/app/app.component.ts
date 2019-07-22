import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {ProductDetailOutlets, CurrentProductService, OutletService} from '@spartacus/storefront';
import {Product} from '@spartacus/core/src/model/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mystore';
  waa = 'SimpleResponsiveBannerComponen';
  productDetails: any;
  pdpOutlets = ProductDetailOutlets;


  constructor() {

  }

  ngOnInit(): void {


  }
}
