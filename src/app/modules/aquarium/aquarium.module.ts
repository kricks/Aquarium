import { NgModule } from '@angular/core';
import { AquariumComponent } from './aquarium.component';
import { AquariumListComponent } from './aquarium-list/aquarium-list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AquariumFormComponent } from './aquarium-form/aquarium-form.component';
import { DeleteModalComponent } from './aquarium-list/delete-modal/delete-modal.component';

@NgModule({
    declarations: [
        AquariumComponent,
        AquariumListComponent,
        ConfirmationComponent,
        AquariumFormComponent,
        DeleteModalComponent
    ],
    imports: [],
    providers: []
})
export class AquariumModule {}
