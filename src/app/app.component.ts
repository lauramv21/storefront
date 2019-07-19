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
  bannerCameraImage: any;
  cameraImageUrl: string;
  accesoriesUrl: string;
  bannerAccesoriesImage: any;
  productDetails: any;
  pdpOutlets = ProductDetailOutlets;
  productSummary: Observable<Product> ;

  constructor(productService: CurrentProductService) {
    this.productSummary = productService.getProduct();
  }

  ngOnInit(): void {
    this.bannerCameraImage = {
      mobile: {
        url: '/medias/Elec-480x320-HomeSpeed-EN-01-480W.jpg?context=bWFzdGVyfGltYWdlc3wzMzkzMnxpbWFnZS9qcGVnfGltYWdlcy9oYzQvaGNkLzg3OTY5NTM0NzcxNTAuanBnfGM1ZWU4NjE4OTEzYmViZTE5YjJiOWRmMWQ1ZWI2ZWI5ZWVjOGQyMGRjMTVmNjIzZDg1MTIzYTU5MjY3YmQ3YzU'
      },
      tablet: {
        url: '/medias/Elec-770x350-HomeSpeed-EN-01-770W.jpg?context=bWFzdGVyfGltYWdlc3w1MzAzOHxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaGI2Lzg3OTY5NTM1NDI2ODYuanBnfDZjN2JlNDU0OTZkZWQ4ZWI5OTk3YTkxOGIzMGUxNWRhZjE0NDhjZGIxMmQ4N2UwMjZhMjk0ZGFkYmY5YmNiOWI'
      },
      desktop: {
        url: '/medias/Elec-960x330-HomeSpeed-EN-01-960W.jpg?context=bWFzdGVyfGltYWdlc3w1MzE2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaDI0Lzg3OTY5NTM2NzM3NTguanBnfDE5Njk1MGQxMjA2OWUwZDMzNzdiMTMzYjk3NGY4N2Y0N2Y0MTg3N2RkZjY2Yzk4ZDY2NThmZTQxMmMwZTllYjk'
      },
      widescreen: {
        url: '/medias/Elec-1400x440-HomeSpeed-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3w4MTk4OHxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaDFhLzg3OTY5NTMyODA1NDIuanBnfGUzYTc5NGE5MjMxZDI3OTAzNjFkYzFmNTA1N2YyNWJiMGEwNjY4ZWY1ODE1YzdjYzdiYzQ3MmQ2YmVjYTI4M2Y'
      }
    };
    this.bannerAccesoriesImage = {
      mobile: {
        url: '/medias/Elec-480x320-HomeSpeed-EN-01-480W.jpg?context=bWFzdGVyfGltYWdlc3wzMzkzMnxpbWFnZS9qcGVnfGltYWdlcy9oYzQvaGNkLzg3OTY5NTM0NzcxNTAuanBnfGM1ZWU4NjE4OTEzYmViZTE5YjJiOWRmMWQ1ZWI2ZWI5ZWVjOGQyMGRjMTVmNjIzZDg1MTIzYTU5MjY3YmQ3YzU'
      },
      tablet: {
        url: '/medias/Elec-770x80-HomeDiscount-EN-01-770W.jpg?context=bWFzdGVyfGltYWdlc3w5NTAwfGltYWdlL2pwZWd8aW1hZ2VzL2g0OS9oNGQvODc5Njk1MzYwODIyMi5qcGd8MzNmMGY5Y2VkZTY1ODE2NzQwMWI1MjIwNTZmYWMwMTE1YTE0ZGE3NzRmNmFiZjNhYTVlMmIwZWJlMDhkNjAyMw'
      },
      desktop: {
        url: '/medias/Elec-960x80-HomeDiscount-EN-01-960W.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaDAzLzg3OTY5NTM3MzkyOTQuanBnfDc2Y2I2MzEwYWQ0MjNkZmVmOTJlMDY2ZDZlZmUxZTQwYmQ4MDk5MzM0NjU0MzdlMzUxMjJmZDU4MWU5ZTg0Yjg'
      },
      widescreen: {
        url: '/medias/Elec-1400x80-HomeDiscount-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3wxMTE0MnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDM5Lzg3OTY5NTMzNDYwNzguanBnfDlhMzY5MmFlYjkwYjg2OWQ1ZTZhNzg3YzZmMjNhZWJiNzNlZmRkZDQ1NTYyOTMxYjE4MmUyNDc2YzhlZmM4NzQ'
      }
    };
    this.cameraImageUrl = '/OpenCatalogue/Cameras/Digital';
    this.accesoriesUrl = '/Open-Catalogue/Cameras/Camera';
    this.productSummary.subscribe((value) => {
      this.productDetails = value;
      console.log(this.productDetails);
    });
  }
}
