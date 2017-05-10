commentStorage = [];

months = {'0':"Janurary", '1': "February", '2': "March", '3':"April",
        '4': "May", '5': "June", '6':"July", '7': "August", '8': "September",
        '9': "October", '10':"Novemeber", '11': "Decemeber"}

function processDate(date) {
  month = months[date.getMonth()];
  day = date.getDate();
  year = date.getFullYear();
  hour = date.getHours()%12;
  isPM = (hour/12) >=1;
  last = "AM";
  if (isPM){
    last= "PM"
  }
  minutes = date.getMinutes();
  addZero = "";
  if (minutes < 10) {
    addZero = "0"
  }
  return month + " "+ day + ", "+ year + " " +hour +":" +addZero +  minutes  + " " + last
}

function postComment(text,date,container,id) {
  comment = {"Avatar":{
    "Poster": "Ruby",
    "src":    "graphics/ruby.png"
     },
   "Comment": {
     "Date": processDate(date),
     "Text": text
   }
 }



  entry = $("<div class='entry'></div>");
  comment_container = $("<div class='comment-container'></div>");
  comment_header = $("<div class='comment-header'></div>");
  avatar = $("<div class='avatar'></div>");
  avatar.append("<img class='avatar-pic' src='"+ comment.Avatar.src+"'>");
  avatar.append("<span class='poster'>"+comment.Avatar.Poster+"</span>");
  comment_header.append(avatar);
  comment_header.append("<div class='comment-date'><p>"+comment.Comment.Date+"</p></div>");
  comment_container.append(comment_header);
  comment_container.append("<div class='comment'>"+comment.Comment.Text+"</div>");
  entry.append(comment_container);
  container.prepend(entry);
  if (commentStorage[Number(id)] === undefined) {
    commentStorage[Number(id)] = [];
  }
  commentStorage[Number(id)].push(comment);
}
