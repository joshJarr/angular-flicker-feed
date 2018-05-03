import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PotatosService } from './services/potatos.service';
import { PotatoListComponent } from './potato-list/potato-list.component';
import { PotatoViewComponent } from './potato-view/potato-view.component';
import { PotatoListingComponent } from './potato-list/potato-listing/potato-listing.component';
import { SearchFilter } from './filters/search.filter';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PotatoListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PotatoListComponent,
    PotatoViewComponent,
    PotatoListingComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes),
    BootstrapModalModule,
    FormsModule
  ],
  providers: [PotatosService],
  bootstrap: [AppComponent],
  entryComponents: [
    PotatoViewComponent
  ]
})
export class AppModule { }
