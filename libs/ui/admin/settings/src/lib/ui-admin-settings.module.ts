import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSharedModule } from '@anvlop/ui/shared';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';

export const uiAdminSettingsRoutes: Route[] = [
  {
    path: '',
    component: EditSettingsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    UiSharedModule,
  ],
  declarations: [EditSettingsComponent],
  exports: [EditSettingsComponent],
})
export class UiAdminSettingsModule {}
