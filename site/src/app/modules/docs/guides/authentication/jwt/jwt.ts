import { Component } from '@angular/core';
import { GuidesComponent } from 'app/modules/docs/guides/guides.component';

@Component({
    selector   : 'jwt',
    templateUrl: './jwt.html'
})
export class JwtComponent
{
    
    constructor(private _guidesComponent: GuidesComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
