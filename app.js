// $(function(){
  // アニメーション
  // $('.box1').slideDown();
  // $('.box1').slideUp();

  // 要素の表示・非表示
  // $('.box1').show();
  // $('.box1').css({'background-color':'#0000FF'});
  // $('.box1').hide();
// });

// 確認問題
// $(function (){
//   $('.box1').slideDown(3000,function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(3000);
//   });
// });

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000FF'})
  });
});