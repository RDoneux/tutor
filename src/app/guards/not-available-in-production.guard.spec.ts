import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { notAvailableInProductionGuard } from './not-available-in-production.guard';
import { IsDevModeService } from '../services/isDevMode/is-dev-mode.service';
  
describe('notAvailableInProductionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      notAvailableInProductionGuard(...guardParameters)
    );
  let mockSnapshot: any;
  let isDevModeServiceMock: any;
  let routerMock: Router;

  beforeEach(() => {
    mockSnapshot = jasmine.createSpyObj<RouterStateSnapshot>(
      'RouterStateSnapshot',
      ['toString']
    );
    isDevModeServiceMock = jasmine.createSpyObj<IsDevModeService>(
      'IsDevModeService',
      ['isDevMode']
    );

    TestBed.configureTestingModule({
      providers: [
        { provide: RouterStateSnapshot, useValue: mockSnapshot },
        { provide: IsDevModeService, useValue: isDevModeServiceMock },
      ],
    });
    routerMock = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true when application is in development mode', () => {
    isDevModeServiceMock.isDevMode.and.returnValue(true);
    expect(executeGuard(new ActivatedRouteSnapshot(), mockSnapshot)).toBeTrue();
    expect(isDevModeServiceMock.isDevMode).toHaveBeenCalledTimes(1);
  });
  it('should redirect to not-available route when in production mode', () => {
    isDevModeServiceMock.isDevMode.and.returnValue(false);
    spyOn(routerMock, 'navigate');
    executeGuard(new ActivatedRouteSnapshot(), mockSnapshot);

    expect(isDevModeServiceMock.isDevMode).toHaveBeenCalledTimes(1);
    expect(routerMock.navigate).toHaveBeenCalledOnceWith(['/not-available']);
  });
});
