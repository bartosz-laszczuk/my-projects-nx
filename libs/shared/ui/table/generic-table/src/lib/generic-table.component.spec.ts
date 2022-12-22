// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { of } from 'rxjs';
// import { spyPropertyGetter } from '../../utils/tests';
// import { GenericTableComponent } from './generic-table.component';
// import { GenericTableModule } from './generic-table.module';
// import { BaseGenericTableService } from './_services/base-generic-table-body.service';

// describe('GenericTableComponent', () => {
//   let fixture: ComponentFixture<GenericTableComponent<any>>;
//   let component: GenericTableComponent<any>;
//   let mockTableService: any;
//   let el: DebugElement;

//   // waitForAsync is going to wait for any asynchronous operation triggered
//   // by the code to complete. Time to wait is predefined and default is 5sec
//   beforeEach(waitForAsync(() => {
//     mockTableService = jasmine.createSpyObj(
//       ['sortByColumn', 'init', 'pageChange', 'filterByFields'],
//       [
//         'tableColumnSettings$',
//         'tableLength',
//         'pageParameters',
//         'sortDefinition',
//         'displayResults$',
//       ]
//     );
//     spyPropertyGetter(mockTableService, 'displayResults$').and.returnValue(
//       of([{}, {}])
//     );
//     TestBed.configureTestingModule({
//       imports: [GenericTableModule],
//       providers: [
//         { provide: BaseGenericTableService, useValue: mockTableService },
//       ],
//     }).compileComponents();
//     //   .then(() => {
//     //     fixture = TestBed.createComponent(GenericTableComponent<any>);
//     //     component = fixture.componentInstance;
//     //   });
//     spyPropertyGetter(mockTableService, 'pageParameters').and.returnValue(
//       of({ index: 0, size: 18 })
//     );
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(GenericTableComponent<any>);
//     component = fixture.componentInstance;
//     el = fixture.debugElement;
//   });

//   // alternative approach
//   //   beforeEach(async () => {
//   //     await TestBed.configureTestingModule({
//   //       imports: [GenericTableModule],
//   //     }).compileComponents();
//   //     fixture = TestBed.createComponent(GenericTableComponent<any>);
//   //     component = fixture.componentInstance;
//   //   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display the course list', () => {
//     fixture.detectChanges();
//     // console.log(el.nativeElement.outerHTML);
//     const questions = el.queryAll(By.css('.app-table__row'));

//     expect(questions).toBeTruthy();
//     expect(questions.length).toEqual(2);
//   });
// });
