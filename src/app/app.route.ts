//====================
// ルータ定義
//====================

import {Routes} from "@angular/router";
import {RootComponent} from "./component/root/root.component";
import { HomeComponent } from './component/home/home.component';

//urlパスと表示するコンポーネントの関連づけ
export const AppRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
];
