import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotemeComponent } from './quoteme/quoteme.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuotemeComponent,
    QuoteDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
