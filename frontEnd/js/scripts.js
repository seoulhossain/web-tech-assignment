$(document).ready(function () {
  const btn = document.querySelectorAll(".link");

  ////////////////////////////////////////////////////////////////////////////////
  //   Code for  1 - handle ajax request on button click
  $("#btn-les01-single").click(function () {
    alert("get single json object");
  });

  $("#btn-les01-array").click(function () {
    $.ajax({
      type: "GET",
      url: "http://localhost/seoul/backEnd/api/getdummydata.php",
      dataType: "json",
      success: function (data, status, xhr) {
        alert("capaian data ok");
        var prettyContent = "<ul>";
        for (let i = 0; i < data.length; i++) {
          prettyContent += "<li> Username :" + data[i].name + "</li>";
          prettyContent += "<li> Id :" + data[i].id + "</li>";
          prettyContent += "<li> email :" + data[i].email + "</li>";
          prettyContent += "<li> Post :" + data[i].post + "</li>";
          prettyContent += "<br>";
        }
        prettyContent += "</ul>";
        document.querySelector("#p-les01-array").innerHTML = prettyContent;
      },

      error: function () {
        alert(status);
      },
    });
  });
});
//    1 --ends here

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Coding for  02 --
$("#btn-les02-single").click(function () {
  // alert(' 02 - single object');
  $.ajax({
    type: "GET",
    url:
      "http://localhost/seoul/backEnd/api/getsingleuser.php?id=" +
      $("#getuserid").val(),
    dataType: "json",
    success: function (data, status, xhr) {
      alert("ok, successfully get the data");
      var prettyContent = "";
      prettyContent += "<br>Name : " + data.name;
      prettyContent += "<br>Id : " + data.id;
      prettyContent += "<br>email : " + data.email;
      prettyContent += "<br>Posting : " + data.post;
      document.querySelector("#p-les02-single").innerHTML = prettyContent;
    },

    error: function () {
      alert(status);
    },
  });
});

$("#btn-les02-array").click(function () {
  // alert(' 02 array objects');
  $.ajax({
    type: "GET",
    url: "http://localhost/seoul/backEnd/api/getalluser.php",
    dataType: "json",
    success: function (data, status, xhr) {
      alert("capaian data ok");
      var prettyContent = "<ul>";
      for (let i = 0; i < data.length; i++) {
        prettyContent += "<li> Username :" + data[i].name + "</li>";
        prettyContent += "<li> Id :" + data[i].id + "</li>";
        prettyContent += "<li> email :" + data[i].email + "</li>";
        prettyContent += "<li> Post :" + data[i].post + "</li>";
        prettyContent += "<br>";
      }
      prettyContent += "</ul>";
      document.querySelector("#p-les02-array").innerHTML = prettyContent;
    },

    error: function () {
      alert(status);
    },
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////
//    03 --
$("#frm-insertUser").submit(function (event) {
  alert("form submit");
  event.preventDefault();

  //use this technique for ajax data if not using RESTFul
  //NOTE: this will capture the name attribute (not id) in our form
  var formData = $(this).serialize();
  console.log(formData); // check using console to make sure all the form data values are correctly serialized

  $.ajax({
    type: "POST",
    url: "http://localhost/seoul/backEnd/api/adduser.php",
    data: formData,
    dataType: "json",

    success: function (data, status, xhr) {
      if (data.rowcount > 0) {
        alert("ok, successfully add data");
        appendList(data);
      } else {
        alert("fail to insert, " + data.errormessage);
      }
    },

    error: function () {
      alert("ef fef error" + status.log);
    },
  });
});
//////////////////////////////////////////////////////////////////////////////////////////

function appendList(data) {
  var prettyContent = "";
  prettyContent += "<ul>";
  prettyContent += "<li>name : " + data.name + "</li>";
  prettyContent += "<li>id : " + data.id + "</li>";
  prettyContent += "<li>email : " + data.email + "</li>";
  prettyContent += "<li>post : " + data.post + "</li>";
  prettyContent += "</li></ul></br>";
  $("#p-les03-01").append(prettyContent);
}

//////////////////////////////////////////////////////////////////////////////
//  04 - DELETE USER

$("#frm-deleteUser").submit(function (event) {
  alert("delete user based on ID");
  event.preventDefault();

  //use this technique for ajax data if not using RESTFul
  //NOTE: this will capture the name attribute (not id) in our form
  var formData = $(this).serialize();
  console.log(formData); // check using console to make sure all the form data values are correctly serialized

  $.ajax({
    type: "DELETE",
    url:
      "http://localhost/seoul/backEnd/api/deleteUser.php?id=" +
      $("#deleteuserid").val(),
    dataType: "json",
    success: function (data) {
      if (data.status == "success") {
        alert("deletion succeed");
      } else {
        alert("deletion failed - no record found with the given ID");
      }
      // var prettyContent = '';
      // prettyContent += '<br>Name : ' + data[0].name;
      // prettyContent += '<br>Id : ' + data[0].id;
      // prettyContent += '<br>email : ' + data[0].email;
      // prettyContent += '<br>Posting : ' + data[0].post;
      // document.querySelector('#p-les02-single').innerHTML = prettyContent;
    },

    error: function () {
      alert("error" + status);
    },
  });
});
