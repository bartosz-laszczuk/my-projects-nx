import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';
import { GenericTableHeaderComponent } from './_components/generic-table-sortable-header/generic-table-sortable-header.component';

@NgModule({
  declarations: [TableComponent, GenericTableHeaderComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class SharedUiTableGenericTableV2Module {}
