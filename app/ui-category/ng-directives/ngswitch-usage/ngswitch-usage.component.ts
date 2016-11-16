// >> using-ngswitch-code 
import { Component } from "@angular/core";

@Component({
    selector: 'ngswitch-component',
    templateUrl: './ngswitch-usage.component.html',
})

export class UsingNgSwitchExamplesComponent {
    public color: string;

    onBlue() {
        this.color = "blue";
    }

    onPurple() {
        this.color = "purple";
    }

    onYellow() {
        this.color = "yellow";
    }
}
// << using-ngswitch-code        
