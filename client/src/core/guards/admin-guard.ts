import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastSerive } from '../services/toast-serive';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toast = inject(ToastSerive);

  if (
    accountService.currentUser()?.roles.includes('Admin') ||
    accountService.currentUser()?.roles.includes('Moderator')
  ) {
    return true;
  } else {
    toast.error('Enter this area, you cannot');
    return false;
  }
};
