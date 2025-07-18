import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastSerive } from '../services/toast-serive';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toast = inject(ToastSerive);

  if (accountService.currentUser()) return true;
  else {
    toast.error('You shall not pass');
    return false;
  }
};
