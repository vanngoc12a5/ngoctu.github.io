$("a[href*=#]").click(function () {
  return false;
});

var animationEndEvent =
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
  wrap: $("#people"),
  people: [
    { name: "", age: "Bấm vào trái tim bên dưới đi :3", img: "images/0.jpg" },
    { name: "", age: "Hé nhô pạn Linh", img: "images/1.jpg" },
    {
      name: "",
      age: "Mìn làm cái trò mèo này vào ngày 14/5/2022",
      img: "images/2.jpeg",
    },
    {
      name: "",
      age: `Và hôm nay là ngày ${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
      img: "images/3.jpg",
    },
    {
      name: "",
      age: "Đây là trang web mìn làm riêng cho cậu đóa!",
      img: "images/5.jpg",
    },
    { name: "", age: "Cậu có thích khum?", img: "images/4.jpg" },
    { name: "", age: "Lưu ý!!!", img: "images/10.jpg" },
    { name: "", age: "Cậu sắp bước vào khu vực cấm rồi đó!!!", img: "images/7.jpg" },
    { name: "", age: "Mìn yêu cầu cậu dừng lại!!!", img: "images/6.jpeg" },
    {
      name: "",
      age: "Nếu không cậu sẽ gặp thiên thần đáng êu của mìn đóa!!!",
      img: "images/3.jpg",
    },
    { name: "", age: "", img: "images/l1.jpg" },
    { name: "", age: "", img: "images/l3.jpg" },
    { name: "", age: "", img: "images/l4.jpg" },
    { name: "", age: "", img: "images/l5.jpg" },
    {
      name: "",
      age: "Mìn lỡ iu cậu nhiều òi phải nàm shao phải nàm shaoooo",
      img: "images/12.jpg",
    },
    {
      name: "",
      age: "Làm người êu mình nhaaaa!!! Mình cho cậu chìa khóa của cánh cửa cuối cùng :333",
      img: "images/13.jpg",
    },
    {
      name: "",
      age: `Hãy nhập mật khẩu và bấm xác nhận để mở cửa <input class="pass"></input><button class="xn">Xác nhận</button`,
      img: "images/13.jpg",
    },
  ],
  counter: 0,
  add: function () {
	  console.log(this.counter);
    if (this.counter < this.people.length) {
      var random = this.people[this.counter];
      if (random.age == "") {
        this.wrap.append(
          "<div class='person'><img alt='" +
            random.name +
            "' src='" +
            random.img +
            "' /></div>"
        );
      } else {
        this.wrap.append(
          "<div class='person'><img alt='" +
            random.name +
            "' src='" +
            random.img +
            "' /><span><strong>" +
            "Duy said: " +
            "</strong> " +
            random.age +
            "</span></div>"
        );
      }
      this.counter++;
    } else {
      this.counter = this.people.length -1
    }
    // var random = this.people[Math.floor(Math.random() * this.people.length)];
  },
};

var App = {
  yesButton: $(".button.yes .trigger"),
  noButton: $(".button.no .trigger"),
  blocked: false,
  like: function (liked) {
    var animate = liked ? "animateYes" : "animateNo";
    var self = this;
    if (!this.blocked) {
      this.blocked = true;
      $(".person")
        .eq(0)
        .addClass(animate)
        .one(animationEndEvent, function () {
          $(this).remove();
          Person.add();
          self.blocked = false;
        });
    }
  },
};

var Phone = {
  wrap: $("#phone"),
  clock: $(".clock"),
  updateClock: function () {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    hours = (hours < 10 ? "0" : "") + hours;
    min = (min < 10 ? "0" : "") + min;
    var str = hours + ":" + min;
    this.clock.text(str);
  },
};

App.yesButton.on("mousedown", function () {
  App.like(true);
  console.log("ok");
});

App.noButton.on("mousedown", function () {
  App.like(false);
});

$(document).ready(function () {

  Phone.updateClock();
  setInterval("Phone.updateClock()", 1000);
  Person.add();
  Person.add();
  Person.add();
  Person.add();
  $(document).on('click', '.xn',function () {
	  if ($('.pass').val() == 'anhyeubelinhnhieu'){
		window.location.href = "love.html";
	  }
	  else{
		  alert("Sai mật khẩu òi :3333")
	  }
  });
});
