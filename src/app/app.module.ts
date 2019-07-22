import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ConfigModule} from '@spartacus/core';
import {translations, translationChunksConfig} from '@spartacus/assets';
import {
  B2cStorefrontModule,
  CarouselModule,
  defaultCmsContentConfig,
  GenericLinkModule,
  ItemCounterModule,
  MediaModule,
  OutletModule,
  ProductCarouselModule,
  ProductSummaryModule,
  StarRatingModule
} from '@spartacus/storefront';
import {NgxImageZoomModule} from 'ngx-image-zoom';

import {AppComponent} from './app.component';
import {CustomBannerComponent} from './components/custom-banner/custom-banner.component';
import {ProductSummaryComponent} from './components/product-summary/product-summary.component';
import {AdvertisementBannerComponent} from './components/advertisement-banner/advertisement-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomBannerComponent,
    ProductSummaryComponent,
    AdvertisementBannerComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://hybris-rnd.test4echo.app',
          prefix: '/rest/v2/',
          legacy: false
        }
      },
      authentication: {
        client_id: 'spartacus',
        client_secret: 'test4echo'
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      layoutSlots: {
        header: {
          md: {
            slots: [
              'PreHeader',
              'SiteContext',
              'SiteLinks',
              'SiteLogo',
              'SearchBox',
              'SiteLogin',
              'MiniCart',
              'NavigationBar',
            ],
          },
          xs: {
            slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
          },
        },
        navigation: {
          md: {slots: []},
          xs: {
            slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
          },
        },
        footer: {
          slots: ['Footer'],
        },
        LandingPage2Template: {
          slots: [
            'Section2A',
            'Section2B',
            'Section2C',
            'Section3',
            'Section4',
            'Section5',
            'Section1',
          ],
        },
        ContentPage1Template: {
          slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
          slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
          slots: ['ProductListSlot', 'ProductLeftRefinements'],
        },
        SearchResultsListPageTemplate: {
          slots: [
            'Section2',
            'SearchResultsListSlot',
            'ProductLeftRefinements',
            'Section4',
          ],
        },
        ProductDetailsPageTemplate: {
          slots: [
            'TopHeaderSlot',
            'Summary',
            'UpSelling',
            'CrossSelling',
            'Tabs',
            'PlaceholderContentSlot',
          ],
        },
        CartPageTemplate: {
          slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
          slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
          slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
          slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
          slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
          slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
      },
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent
        }
      }
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig),
    MediaModule,
    CarouselModule,
    ProductCarouselModule,
    OutletModule,
    GenericLinkModule,
    NgxImageZoomModule.forRoot(),
    ProductSummaryModule,
    StarRatingModule,
    ItemCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomBannerComponent
  ]
})
export class AppModule {
}
