import { NgModule } from '@angular/core';
import { FluytSplashScreenService } from 'core/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        FluytSplashScreenService
    ]
})
export class FluytSplashScreenModule {
    
    constructor(private _fluytSplashScreenService: FluytSplashScreenService) {
    }
}
