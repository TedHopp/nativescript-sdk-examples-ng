// >> using-ngif-code 
import { Component } from "@angular/core";

@Component({
    selector: 'ngif-component',
    templateUrl: './using-ngif.component.html',
})

export class UsingNgIfComponent {
    public isVisible: boolean = true;

    onTap() {
        if (this.isVisible) {
            this.isVisible = false;
        } else  {
            this.isVisible = true;
        }
    }
}
// << using-ngif-code        
