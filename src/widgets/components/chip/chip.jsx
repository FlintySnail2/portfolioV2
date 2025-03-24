import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
export default function Chip() {
    return (<ChipListComponent id="chip-default">
        <ChipsDirective>
            <ChipDirective text="Apple" ></ChipDirective>
            <ChipDirective text="Microsoft" cssClass="e-info"></ChipDirective>
            <ChipDirective text="Google" cssClass="e-success"></ChipDirective>
            <ChipDirective text="Tesla" cssClass="e-warning"></ChipDirective>
            <ChipDirective text="Intel" cssClass="e-danger"></ChipDirective>
        </ChipsDirective>
    </ChipListComponent> );
}
