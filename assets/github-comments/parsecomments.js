  function loadComments(data) {
    for (var i=0; i<data.length; i++) {
      var cuser = data[i].user.login;
      var cuserlink = data[i].user.html_url;
      var clink = data[i].html_url;
      var cbody = data[i].body;
      var cavatarlink = data[i].user.avatar_url;      
      var cdate = data[i].created_at; //Date.parse(data[i].created_at).toString("yyyy-MM-dd HH:mm:ss");
      $("#comments").append("<div class='comment'><div class='commentheader'><div class='commentgravatar'>" + '<img src="' + cavatarlink + '" alt="" width="20" height="20">' + "</div><a class='commentuser' href=\""+ cuserlink + "\">" + cuser + "</a><a class='commentdate' href=\"" + clink + "\">" + cdate + "</a></div><div class='commentbody'>" + cbody + "</div></div>");
    }
  }
