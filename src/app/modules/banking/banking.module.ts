import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ AccountsComponent, AccountDetailsComponent, TransactionComponent ],
  declarations: [AccountsComponent, AccountDetailsComponent, TransactionComponent]
})
export class BankingModule { }
