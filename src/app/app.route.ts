//====================
// ルータ定義
//====================

import {Routes} from "@angular/router";
import {RootComponent} from "./component/root/root.component";
import { HomeComponent } from './component/home/home.component';
import { LoginComponent} from './component/login/login.component';
import { AdminGuard } from  './component/admin.guard';

//urlパスと表示するコンポーネントの関連づけ
export const AppRoutes: Routes = [
    {path: "", component: LoginComponent},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent, canActivate: [AdminGuard]},
];
