import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Comments } from '../../class/comments';  // commentsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { map } from "rxjs/operators"; // 追加
import { AuthService } from  '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../common.css','./home.component.css']
})
export class HomeComponent implements OnInit {


  commentsRef: AngularFirestoreCollection<Comments>;
  comments: Observable<Comments[]>;



  constructor(private db: AngularFirestore, private fb: FormBuilder,private authService: AuthService) {

    this.commentsRef = this.db.collection<Comments>('comments') //, ref => ref.where('initial', '==', this.SearchByInitial))
    this.comments = this.commentsRef.snapshotChanges().pipe
      (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Comments;
        const id = action.payload.doc.id;
        return { id, ...data };
        });
      }));      
  }
  

/* ここからは追加用コード */

  //フォームグループ
  commentForm: FormGroup;

  //Validatorを作成
  ngOnInit() {
    this.commentForm = this.fb.group({
      content:  ['', [
        Validators.required
      ]],
      initial:  ['', [
        Validators.required,
        Validators.maxLength(1)
      ]],
      username:  ['', 
        Validators.required
      ]
    });  
  }
  // ゲッターを作成
  get content() {
    return this.commentForm.get('content')
  }
  get initial() {
    return this.commentForm.get('initial')
  }
  get username() {
    return this.commentForm.get('username')
  }

  // データ追加メソッド
  addCommentData(content:string, initial:string, username:string) {
    this.commentsRef.add({ 
      content: this.content.value, 
      initial: this.initial.value,
      user: {
        name: this.username.value
      },
    });
  }




/* ここからは編集用コード */

  // 編集フィールドの切り替え
  toggleEditComment(item: Comments) { // 追加
    return item.edit_flag = (!item.edit_flag); //booleanを反転させる
  }
  
  
  // 編集内容を保存
  saveEditComment(item: Comments) { // 追加
    this.db
      .collection('comments')
      .doc(item.id)
      .update({
        content: item.content,
        initial: item.initial,
        user: {
          name: item.user.name
        },
      })
      .then(() => {
        alert('コメントを更新しました');
        item.edit_flag = false;
      });
  }


/* ここからは削除用コード */

  // コメントを削除する
  deleteComment(item: Comments) { // 追加
    this.db
      .collection('comments')
      .doc(item.id)
      .delete()
      .then(() => {
        alert('コメントを削除しました');
      });
  }



}
