
console.log("test")

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');


var x = canvas.width - 197;//テトリミノ位置の横軸
var y = canvas.height / 30;//テトリミノ位置の縦軸
var dx = 0;//テトロミノの移動傾き
var dy = 1;//テトロミノの垂直移動速度

function drawmino() {
  ctx.beginPath();
  ctx.rect(x, y, 33, 33);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawmino();
  x += dx;
  y += dy;
}

setInterval(draw, 10);

/*

仕様書

技術
JavaScript
HTML
CSS

ゲーム定義
・テトロミノ
・プレイフィールド

プレイフィールドの定義
・プレイフィールド外の上部から
テトロミノが落ちてくることができる

・プレイフィールドの一番下に
テトロミノが落ちたら止まる

・プレイフィールドの外に
テトロミノが移動できない。


・テトロミノの定義
動きの定義
キーボードの上矢印キーを押すとテトロミノが上方向に回転
キーボードの下矢印キーを押すとテトロミノが下方向に回転
キーボードの右矢印キーを押すとテトロミノが右方向に回転
キーボードの右矢印キーを押すとテトロミノが左方向に回転
キーボードの下向き矢印キーを押したままにするはテトロミノが垂直落下の速度が速くなる。


・終了条件
テトロミノが重なっている状態が
プレイフィールドの最上段に届いて
プレイフィールドの外に出たとき。


ゲームの処理
・盤面がある
・上からブロックが落ちてくる
・矢印キーでブロックを操作できる
・着地するとブロックが消える


入出力
・キーボード矢印キーが投入されたら
上下左右の入力値を読み込み

備考
・衝突判定

これからすること
fillRectオブジェクトを自動的に上から下に移動する。
fillRectオブジェクトをキーボードの操作で移動する。
fillRectオブジェクトをキーボードの操作で回転する。
playfieldの下に到着したら止まる。


*/
