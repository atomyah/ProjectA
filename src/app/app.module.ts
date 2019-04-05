//====================
// AppModule（アプリに必要なモジュール定義）クラス
//====================

//Angularモジュールのインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';  // 追加
import { AngularFireModule } from '@angular/fire';  // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加

//Material2モジュールのインポート
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';

// 作成したコンポーネントのインポート
import {RootComponent} from './component/root/root.component';

// 作成したサービスのインポート

// ルーター関連
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.route';
import { HomeComponent } from './component/home/home.component';

//アプリで使用するモジュール定義
@NgModule({
   //モジュール
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSliderModule,
    MatSnackBarModule,
    HttpClientModule,
    //ルーターの定義
    RouterModule.forRoot(AppRoutes),
    //Firebaseの定義
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
  ],

  // 作成したコンポーネント 
  declarations: [
    RootComponent,
    HomeComponent,
  ],

  // DIするサービス 
  providers: [
  ],

    // 初めに呼び出すコンポーネント
  bootstrap: [RootComponent]
})

export class AppModule { 
}
