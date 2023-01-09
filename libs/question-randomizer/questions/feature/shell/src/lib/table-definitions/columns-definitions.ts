import { IColumn } from '@my-projects-nx/shared/ui/table/generic-table-v2';

export const columnDefs: IColumn[] = [
  {
    displayName: 'Question',
    propertyName: 'question',
    width: '40%',
  },
  {
    displayName: 'Answer',
    propertyName: 'answer',
    width: '40%',
  },
  {
    displayName: 'Category',
    propertyName: 'categoryName',
    width: '20%',
  },
];

// export const columnType: string = TypeOfTemplateEnum.COLUMN;
