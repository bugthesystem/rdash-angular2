import {Injectable} from "angular2/core";

@Injectable()
export class ServerListService {
    servers:any[] = [{
        name: 'RDVMPC001',
        ip: '238.103.133.37',
        'tooltip': '',
        'tooltipcls': 'text-success',
        'icon': 'fa-check'
    },
        {name: 'RDVMPC002', ip: '68.66.63.170', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {name: 'RDVMPC003', ip: '76.117.212.33', 'tooltip': '', 'tooltipcls': 'text-danger', 'icon': 'fa-warning'},
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {
            name: 'RDESX003',
            ip: '209.25.191.61',
            'tooltip': 'Could not connect!',
            'tooltipcls': 'text-warning',
            'icon': 'fa-flash'
        },
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'},
        {name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check'}
    ];

    add(value:any):void {
        this.servers.push(value);
    }

    all():any[] {
        return this.servers;
    }
}
