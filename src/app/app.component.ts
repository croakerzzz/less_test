import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

const enum LLL {
    d = '123'
}

export interface MyNumber {
    num: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

    formGroup: FormGroup

    constructor(private fb: FormBuilder) {
        this.formGroup = fb.group({
            editor: new FormControl('')
        })
    }

    editorValue: string[] = [];

    ngOnInit(): void {
        const a: number = 1;

        switch (a) {
            case 1:
                console.log(1);
                break
            case 2:
                console.log(1);
                break
            case 3:
                console.log(1);
        }
    }

    // title = 'less_test';
    //
    // list: number[] = [];
    //
    // obj: MyObj = {
    //     num1: 1,
    //     num2: 1,
    // }

    num = 1;

    numObj: MyNumber = {
        num: 100
    }

    numObj$ = new BehaviorSubject<MyNumber>({num: 1});

    add() {
        this.num++;

        this.editorValue = [...this.editorValue, '2'];

        this.numObj.num++;

        // const obj = this.numObj$.value;
        // obj.num++;
        //
        // this.numObj$.next(obj);

        // this.numObj = {...this.numObj, num: this.numObj.num + 1};

        // this.list.push(1);
        // this.obj.num1++;
    }

    add2() {
        //console.log('3333333333');
    }

    takeObj() {
        console.log('!!!!!!!!!!!!!');
        return this.numObj$;
    }
}
