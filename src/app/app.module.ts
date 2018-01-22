import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from "./modules/core/core.module";
import {ProfileComponent} from "./modules/user/profile/profile.component";
import {UserModule} from "./modules/user/user.module";
import {BankingModule} from "./modules/banking/banking.module";
import {AccountsComponent} from "./modules/banking/accounts/accounts.component";
import {AccountDetailsComponent} from "./modules/banking/account-details/account-details.component";
import {TransactionComponent} from "./modules/banking/transaction/transaction.component";
import {DashboardComponent} from "./modules/customer-dashboard/dashboard/dashboard.component";
import {CustomerDashboardModule} from "./modules/customer-dashboard/customer-dashboard.module";
import {RegisterComponent} from "./modules/user/register/register.component";
import {LoginComponent} from "./modules/user/login/login.component";

const routes: Routes = [
    { path: '', component: DashboardComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'accounts', component: AccountsComponent },
            { path: 'accounts/:id', component: AccountDetailsComponent },
            { path: 'transaction', component: TransactionComponent }
        ]
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
    ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, UserModule, BankingModule, CustomerDashboardModule,
    RouterModule.forRoot(
        routes,
        {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
