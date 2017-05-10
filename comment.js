commentStorage = [];

function postComment(text,date,container,id) {
  comment = {"Avatar":{
    "Poster": "Ruby",
    "src":    "graphics/sara.png"
     },
   "Comment": {
     "Date": date,
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
  console.log(commentStorage);
}
