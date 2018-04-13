import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OurmapComponent } from './ourmap/ourmap.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app.routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './filter.pipe';
import { TestListComponent } from './test-list/test-list.component';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { SearchPipe } from './pipe/search.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { ValidatorDirective } from './directive/validator.directive';
import { TestHttpComponent } from './test-http/test-http.component';
import { WebsocketComponent } from './websocket/websocket.component';
import {WebsocketService} from './shared/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    HomeComponent,
    ContactComponent,
    OurmapComponent,
    AboutComponent,
    ItemListComponent,
    ProductDetailComponent,
    FilterPipe,
    TestListComponent,
    MapdetailComponent,
    ChatComponent,
    SearchPipe,
    ItemDetailsComponent,
    LoginComponent,
    TemplateComponent,
    ValidatorDirective,
    TestHttpComponent,
    WebsocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
