$(window).on('load scroll', (e) => {
  // HTMLドキュメントが読み込み完了した時
  if (e.type === 'load') {
    console.log('loadイベントが発生しました');
  }
  // 画面スクロールした時
  if (e.type === 'scroll') {
    console.log('scrollイベントが発生しました');
  };
});