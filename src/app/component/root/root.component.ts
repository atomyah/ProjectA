//====================
// ルートコンポーネント
//　・コンポーネント共通の処理
//　　ヘッダー、メニュー、画面関連イベント検知
//====================

import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
  })
export class RootComponent {
    title = 'projectA';

    //コンストラクタでルーターを定義
    constructor(
      public router: Router,
      ) {
      }


//メソッド内で遷移する
    async goIntroduction() {
      await this.router.navigate(["/introduction"]);
    }

    async goBasics() {
      await this.router.navigate(["/basics"]);
    }

//トップページへ戻る
    async goHome() {
     await this.router.navigate(['/']);
    }

}

