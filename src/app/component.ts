import { Component } from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app',
    templateUrl: './template.html'
})

export class SlowLookingComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}