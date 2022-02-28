import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'firstApp',
    loadChildren: () =>
      import('./firstApp/first-app.module').then((m) => m.FirstAppModule),
  },
  {
    path: 'secondApp',
    loadChildren: () =>
      import('./secondApp/second-app.module').then((m) => m.SecondAppModule),
  },
  {
    path: '**',
    redirectTo: 'firstApp',
  },
  /*
  {
    path: ['RouteFromNewApp'],
    loadChildren:() => import('[PathFromModuleImport]').then(m => ['NameModule'])
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
