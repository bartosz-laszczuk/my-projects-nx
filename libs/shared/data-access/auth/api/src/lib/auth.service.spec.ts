// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { UtilitiesService } from '@my-projects-nx/shared/util/utils';
// import { AuthService } from './auth.service';

// xdescribe('AuthService', () => {
//   let authService: AuthService;
//   let httpTestingController: HttpTestingController;
//   let mockUtilitiesService: UtilitiesService;

//   beforeEach(() => {
//     mockUtilitiesService = jasmine.createSpyObj(['getApiUrl']);

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         AuthService,
//         { provide: UtilitiesService, useValue: mockUtilitiesService },
//       ],
//     });

//     authService = TestBed.inject(AuthService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   it('should log in user', () => {
//     pending;
//   });
// });
