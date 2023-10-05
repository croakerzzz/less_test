import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => EditorComponent),
        },
    ],

})
export class EditorComponent implements ControlValueAccessor {

    _internalValue: string[] = [];

    onChange: (value: string[]) => void = () => null;

    onTouched: () => void = () => null;

    registerOnChange(fn: (value: string | object | null) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(value: string[]): void {
        console.log(value);
        this._internalValue = value;
    }

    click() {
        this._internalValue = [...this._internalValue, '1']
        this.onChange(this._internalValue);
    }
}
