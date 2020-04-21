import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
    {
        path: '',
        component: GalleryComponent,
        children: [
          { path: 'add', component: ImageFormComponent },
          { path: 'list', component: GalleryListComponent },
        ],
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GalleryRoutingModule {}
