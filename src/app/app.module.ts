import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './TodoApp/todos/todos.component';
import { TodoComponent } from './TodoApp/todo/todo.component';
import { FormsBasicsComponent } from './forms-basics/forms-basics.component';
import { FirstComponentComponent } from './routing-setup/first-component/first-component.component';
import { SecondComponentComponent } from './routing-setup/second-component/second-component.component';
import { HomeComponent } from './routing-setup/home/home.component';
import { RestApiComponent } from './rest-api/rest-api.component';

import { HttpClientModule } from '@angular/common/http';
import { BasicsComponent } from './basics/basics.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageOneComponent } from './nested-routing/page-one/page-one.component';
import { PageTwoComponent } from './nested-routing/page-two/page-two.component';
import { NotFoundComponent } from './routing-setup/not-found/not-found.component';
import { HeaderComponent } from './nested-routing/header/header.component';
import { FooterComponent } from './nested-routing/footer/footer.component';
import { DashboardComponent } from './nested-routing/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    FormsBasicsComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    HomeComponent,
    RestApiComponent,
    BasicsComponent,
    PipesComponent,
    PageOneComponent,
    PageTwoComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), StoreModule.forRoot(reducers, { metaReducers }), isDevMode() ? StoreDevtoolsModule.instrument() : []],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
