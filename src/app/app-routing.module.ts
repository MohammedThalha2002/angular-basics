import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './TodoApp/todos/todos.component';
import { FormsBasicsComponent } from './forms-basics/forms-basics.component';
import { FirstComponentComponent } from './routing-setup/first-component/first-component.component';
import { SecondComponentComponent } from './routing-setup/second-component/second-component.component';
import { HomeComponent } from './routing-setup/home/home.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { BasicsComponent } from './basics/basics.component';
import { PipesComponent } from './pipes/pipes.component';
import { NotFoundComponent } from './routing-setup/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'forms', component: FormsBasicsComponent },
  { path: 'routing/1', component: FirstComponentComponent },
  { path: 'routing/2', component: SecondComponentComponent },
  { path: 'rest-api', component: RestApiComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'pipes', component: PipesComponent },
  // LAZY LOADING
  {
    path: 'nested-routing',
    loadChildren: () =>
      import('./nested-routing/nested-routing.module').then(
        (m) => m.NestedRoutingModule
      ),
  },
  // NOT FOUND HANDLER
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
