'use strict'; //エラーを厳格にチェクしてくれる文

console.log('----Ad-----');
console.log('Tom is great!');
console.log('Bob is great!');
console.log('----Ad-----');
console.log('Steve is great!');
console.log('----Ad-----');
console.log('Richard is great!');
// 同じコードが何度も出てくる場合、修正があった時など
// 大変なので関数を使ってまとめる
function kansu(){
  console.log('-----------');
  console.log('----Ad-----');
}
console.log('Tom is great!');
kansu();
console.log('Bob is great!');
kansu();
console.log('Steve is great!');
kansu();
console.log('Richard is great!');
//それぞれの場所で表示を少し変えたい時
function A ( B = 'shokiti') { //Bは仮引数 =の後に期値
  console.log('----------');
  console.log(`---${ B }---`);
}
A ('Header');// ''の中には、Bに渡す(値)引数を入力
console.log('Tom is great!');
console.log('Bob is great!');
A ();
console.log('Steve is great!');
console.log('Richard is great!');
A ('Footer');//実際にBに渡される値=実引数と呼ぶ

function sum(a , b , c){
  // console.log(a + b + c);
  return a + b + c;
  //関数内でのreturnの後は処理が実行されない
}
// sum(1 , 2 , 3);//6
// sum(3 , 4 , 5);//12
const tasu = sum(1 , 2 , 3) + sum(3 , 4 , 5);//18
console.log(tasu);
console.log('...........................');

//(1)かんすうせんげん
// 関数宣言　function関数名(仮引数,仮引数,...){
//   処理;
//   処理;
//   return 返り値;
// };
// 呼び出し　関数名(実引数,実引数,...);

//(2)かんすうしき  
// const 定数名 = function(仮引数,仮引数,...){
//   処理;
//   処理;
//   return 返り値;
// };
// 定数名(実引数,実引数,...);
const s = function(a , b , c){
  return a + b + c ;
};
const tas = s(3 , 3 , 3) + s(1 , 2 , 0)
console.log(tas);
//上記の関数式を短く書く方法
const samu = (a , b , c) => a + b + c;
const gookei = samu(2 , 2 , 2) + samu(1 , 1 , 0);//8
console.log(gookei);
//引数をひとつ渡すと倍にして返してくれる関数式
const double = function(a){
  return a * 2;  //定数ダブルにaを渡すと2倍で返す
};  //下記、省略形
const daburu = a => a * 3; 
console.log(daburu(2));//'2を3倍返しで  '
console.log(`3の3倍返しだっ！　　${daburu(3)}`)
//定数や変数のスコープ
const x = 1;//グローバルスコープ(ブロック外)
function f(){
  const x = 2 ;
  console.log(`functionのブロック内限定のxは...${x}`);
}
f();
console.log(`ブロックの外のxは初回定義の...${x}`);//最初の定数x が適用される 
const y = 100;
console.log(`const y...${y}`);







