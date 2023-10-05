import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

export interface MyObj {
    num1: number;
    num2: number;
}

@Component({
    selector: 'app-cell2',
    templateUrl: './cell2.component.html',
    styleUrls: ['./cell2.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cell2Component implements OnChanges {

    @Input()
    obj?: MyObj;

    ngOnChanges(changes: SimpleChanges): void {
        console.log('555555555555555');
    }

    clicK() {

    }
}
