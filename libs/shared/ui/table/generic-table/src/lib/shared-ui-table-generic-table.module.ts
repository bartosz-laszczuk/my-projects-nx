import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { GenericTableCellComponent } from './_components/generic-table-cell/generic-table-cell.component';
import { TableCellEnumPipe } from './_pipes/table-cell-enum.pipe';
import { GenericTableHeaderComponent } from './_components/generic-table-header/generic-table-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiTablePaginatorModule } from '@my-projects-nx/shared/ui/table/paginator';
import { SharedUiCrtControlsInputComponent } from '@my-projects-nx/shared/ui/crt/controls/input';
import { SharedUiCrtControlsFormFieldComponent } from '@my-projects-nx/shared/ui/crt/controls/form-field';

@NgModule({
  declarations: [
    GenericTableComponent,
    GenericTableCellComponent,
    TableCellEnumPipe,
    GenericTableHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiCrtControlsFormFieldComponent,
    SharedUiCrtControlsInputComponent,
    SharedUiTablePaginatorModule,
  ],
  exports: [GenericTableComponent],
})
export class SharedUiTableGenericTableTempModule {}
