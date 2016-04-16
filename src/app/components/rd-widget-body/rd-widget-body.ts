import {Component, Input} from 'angular2/core';
@Component({
    selector: 'rd-widget-body',
    properties: ['loading', 'classes'],
    templateUrl: 'app/components/rd-widget-body/rd-widget-body.html'
})
export class RdWidgetBody {
    @Input()
    loading:boolean;

    @Input()
    classes:string;

    constructor() {
        this.loading = false;
        this.classes = '';
    }
}
