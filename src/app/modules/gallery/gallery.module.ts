import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [
    GalleryComponent,
    ImageFormComponent,
    GalleryListComponent,
    GalleryFilterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GalleryRoutingModule,
  ],
  providers: [],
})
export class GalleryModule {}
