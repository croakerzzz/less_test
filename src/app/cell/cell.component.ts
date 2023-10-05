import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Input,
    IterableDiffers,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {MyNumber} from "../app.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit, OnChanges, DoCheck {
    //private differ?: IterableDiffer<number>;

    @Input()
    num?: number;

    @Input()
    numObj?: MyNumber;

    @Input()
    numObj$?: Observable<MyNumber>;

    formGroup?: FormGroup;

    constructor(
        private differs: IterableDiffers,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.formGroup = this.fb.group({
            text: ["", [Validators.required]]
        })

        //this.differ = this.differs.find(this._list).create();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('cell/ngOnChanges');

        this.formGroup?.controls["text"].patchValue(this.numObj?.num + '');
    }

    ngDoCheck(): void {
        console.log('cell/ngDoCheck');

        //this.cdr.detectChanges();

        // todo а давайте проверять менялось чет или нет
        // this.formGroup?.controls["text"].patchValue(this.numObj?.num + '');

        // const changes = this.differ?.diff(this._list);
        // console.log(changes);
        //
        // if (changes) {
        //     console.log('22222222222222222');
        //     this.cdr.detectChanges();
        // }
    }

    // _list: number[] = [];

    // @Input()
    // set list(value: number[]) {
    //     this._list = value;
    //     console.log('!!!!!!!!')
    // };

    click() {

    }
}
