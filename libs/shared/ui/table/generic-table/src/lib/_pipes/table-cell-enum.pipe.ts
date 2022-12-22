import { Pipe, PipeTransform } from '@angular/core';
import { DictionaryItem } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';

@Pipe({
  name: 'tableCellEnum',
})
export class TableCellEnumPipe implements PipeTransform {
  transform(
    value: number | string,
    displayTexts: Map<number, string> | DictionaryItem[]
  ): string | null {
    if (Array.isArray(displayTexts)) {
      return (
        displayTexts.find((dictionaryItem) => dictionaryItem.id === value)
          ?.name ?? null
      );
    }
    return null;
  }
}
