import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  productSummary: Observable<Product>;
  productInformation: any;
  hasImagesCarousel: boolean;
  imagesGallery: any;
  activeImage: any;

  constructor(productService: CurrentProductService) {
    this.productSummary = productService.getProduct();
  }

  ngOnInit() {
    this.productSummary.subscribe((value) => {
      this.productInformation = value;
      this.hasImagesCarousel = this.productInformation ? this.productInformation.images.GALLERY.length > 1 : false;
      this.setImages();
      console.log(this.productInformation);
    });
  }

  private setImages() {
    this.imagesGallery = [];
    if (this.productInformation) {
      this.productInformation.images.GALLERY.forEach((image, index) => {
        const imageObj = {product: image.product.url, thumbnail: image.thumbnail.url, zoom: image.zoom.url};
        if (index === 0) {
          this.activeImage = imageObj;
        }
        this.imagesGallery.push(of(imageObj));
      });
    }
  }

  changeImageToDisplay(image: string) {
    this.activeImage = image;
  }
}
