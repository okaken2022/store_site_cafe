'use strict';

{
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();//デフォルトの操作のキャンセル。これをしないとスムーススクロールする前にジャンプする
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      // console.log(targetElement) // 結果:menu1
      const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
      const offset = window.pageYOffset; // 現在のスクロール量を取得
      // const gap = 60; // 固定ヘッダー分の高さ。今回は固定ヘッダーがないので削る
      const target = rect + offset;//ウインドウからターゲットまでの距離を取得
      window.scrollTo({//スムーズにスクロールする
        top: target,
        behavior: 'smooth',
      });
    });
  }
}