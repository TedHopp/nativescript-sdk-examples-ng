import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("setInterval example", "/setintervalTimerModuleExampleComponent"),
    new Link("setTimeout example", "/settimeoutTimerModuleExample")
];

@Component({
    selector: 'timer-examples-component',
    templateUrl: '../examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TimerExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}