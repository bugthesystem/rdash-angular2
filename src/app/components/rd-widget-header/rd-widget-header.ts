import {Component, Input} from 'angular2/core';

@Component({
    selector: 'rd-widget-header',
    templateUrl: 'app/components/rd-widget-header/rd-widget-header.html'
})
export class RdWidgetHeader {
    @Input()
    title:string;

    @Input()
    icon:string;

    constructor() {
        this.title = '';
        this.icon = '';
    }
}
