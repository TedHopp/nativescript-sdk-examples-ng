// >> unless-directive-code  
import { Component } from '@angular/core';

@Component({
    selector: 'unless-directive-component',
    templateUrl: './unless-directive.component.html',
})
export class UnlessDirectiveExampleComponent {

    public age: number;
    public condition: boolean;

    constructor() {
        this.condition = true;
    }

    onTap() {
        if (this.age >= 18 && this.age !== 0) {
            this.condition = false;
        } else {
            this.condition = true;
        }
    }
}
// << unless-directive-code
