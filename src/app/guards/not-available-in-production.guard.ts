import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsDevModeService } from '../services/is-dev-mode/is-dev-mode.service';

export const notAvailableInProductionGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const devMode: IsDevModeService = inject(IsDevModeService);
  return devMode.isDevMode() ? true : router.navigate(['/not-available']);
};
