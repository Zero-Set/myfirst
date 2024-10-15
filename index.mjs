import './style.css';
// アロー関数を使って書いていこう
const onclickAdd = () => {
  // Step.0 動作することを確認する。
  // alert('!!');
  // step.1 変数を作る
  const inputText = document.getElementById('add-text').value;
  // 初期化はしない

  // step.2 DOM生成追加
  const li = document.createElement('li');
  // step.3 class名
  const div = document.createElement('div');
  div.className = 'list-row';
  // step.4 入力した内容追加
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = inputText;

  // Step7. 完了ボタン生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert('!');
  });

  // Step8. 削除ボタン作成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    alert('?');
  });

  // step.5 HTMLの階層構造を作る。
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // step6. 未完了リストに追加する。
  document.getElementById('incomplete-list').appendChild(li);

  /*
  const create_button = document.createElement('button');
  const delete_button = document.createElement('button');
  */
  alert('追加しました');
};

// 取得したいidを書く、イベントリスナー
document
  .getElementById('add-button')
  .addEventListener('click', onclickAdd, false);
