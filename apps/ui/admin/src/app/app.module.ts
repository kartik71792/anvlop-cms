import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminProjectModule, adminProjectsRoutes } from '@anvlop/ui/admin/projects';
import { UiAdminAuthModule, adminAuthRoutes, UiAdminAuthInterceptor } from '@anvlop/ui/admin/auth';
import { AdminPagesModule, adminPagesRoutes } from '@anvlop/ui/admin/pages';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'projects', children: adminProjectsRoutes },
        { path: 'auth', children: adminAuthRoutes },
        { path: 'pages', children: adminPagesRoutes },
      ],
      { initialNavigation: 'enabled' }
    ),
    AdminProjectModule,
    UiAdminAuthModule,
    AdminPagesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UiAdminAuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
