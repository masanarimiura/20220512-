
const tabs = document.getElementsByClassName('tab-menu__item');
//tabs は class名 tab-menu__item の呼び出し機能の名前
for (let i = 0; i < tabs.length; i++) {
  //for で繰り返す。i をletで変数にして、０からi<tabs.lengthになるまで、i++で１ずつ足していく。tabs.lengthは、tabs の要素の数なので、const tabs = document.getElementsByClassName('tab-menu__item'); からHTMLのclass名 tab-menu__item の数で３つ。
  tabs[i].addEventListener('click', tabSwitch);
}
function tabSwitch() {
  //fabSwitchっていう関数をつくりますって宣言。
  document.getElementsByClassName('active')[0].classList.remove('active');
  //document.getElementsByClassName('active')[0] でクラス名 active の[0]番目を呼び出す。[0]は１番最初の要素ってこと。.classList.remove('active'); でactive で呼び出した クラス名から active を remove する。
  this.classList.add('active');
  //ここのthisは、呼びだされた原因の.の前のオブジェクトを指すため、クリックでta何を指しているのか説明できない。
  document.getElementsByClassName('show')[0].classList.remove('show');
  //上のクラス名 show でやる.
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content__item')[index].classList.add('show');
};