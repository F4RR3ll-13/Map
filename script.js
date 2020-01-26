$(function () {
   function randomInteger(min, max) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }
   let showPopup = () => {
      let popup = $(".popup").eq(randomInteger(0, $(".popup").length - 1));
      $(".popup").removeClass("active");
      popup.addClass("active");
   }
   $.ajax({
      url: 'data.json',
      type: 'get',
      dataType: 'json',
      success: function (data) {
         $.each(data.points, function (index, value) {
            $(".points").append(`<div class="point" style="top: ${value.top}; left: ${value.left};">
            <div class="icon"></div>
            <div class="name">${value.name}</div>
         </div>`)
         });
         $.each(data.popups, function (index, value) {
            $(".popups").append(`<div class="popup" style=" top: ${value.top}; left: ${value.left};">
            <div class="popimg">
               <img src="${value.name}" alt="">
            </div>
         </div>`)
         });
         setInterval(showPopup, 3000);
      }
   });
})