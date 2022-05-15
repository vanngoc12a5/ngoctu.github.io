const date = new Date("2022-5-15")

$(function () {
    $('.xn').on('click', function (e) {
        e.preventDefault()
        if ($('.matkhau').val() == 'yeulinhnhieunhieu'){
            $('.pass').remove()
            $('.container').removeClass('hidden');
        }
        else{
            alert('Sai mật khẩu rồi!!!')
        }
    });


    $('.date').text(`${(date.getDate()>9)?date.getDate():"0"+date.getDate()}-${(date.getMonth()>8)?(date.getMonth()+1):"0"+(date.getMonth()+1)}-${date.getFullYear()}`);
    $('.counter').text(Math.floor( Math.floor((new Date() - date) / 1000) / 60 / 60 / 24)+" NGÀY");
    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - date) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - date) / 1000) / 60)) % 60,
        sec =  Math.floor((today - date) / 1000) % 60;
        $('.time').text(`${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`)
  } olock();
  var timer = setInterval(function(){olock()}, 1000);
});