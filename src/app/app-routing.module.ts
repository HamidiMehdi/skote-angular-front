import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorNotFoundComponent} from "./_utils/error-not-found/error-not-found.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)},
  {path: '**', component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
