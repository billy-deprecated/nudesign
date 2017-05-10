//Post 1
posts = []

posts[0] = {"Avatar": {
  "Poster": "Ms.Laura",
  "src": "graphics/laura.png",
},"Content": {
   "Date": "May 10th, 2017",
   "Header": "Good Afternoon Parents!",
   "Subjects": [{
    "Header": "Math",
    "Lessons":["Adding and subtracting fractions quiz"]
   },{
    "Header": "Science",
    "Lessons":["Rock candy lab! The kids took the candy from the lab home"]
   },{
    "Header": "Reading",
    "Lessons":["We went over a new set of vocabulary"]
   }, {
    "Header": "Reminder",
    "Lessons": ["Please review and use these words at home"]
  }]
 }
}

//Post 2


posts[1] = {"Avatar": {
  "Poster": "Ms.Laura",
  "src": "graphics/laura.png",
},"Content": {
   "Date": "May 9th, 2017",
   "Header": "Good Afternoon Parents!",
   "Subjects": [{
    "Header": "Math",
    "Lessons":["Dividing Fractions"]
   },{
    "Header": "Science",
    "Lessons":["Continuing earth science, crystals and minerals"]
   },{
    "Header": "Art",
    "Lessons": ["Painting the different layers of Earth's rock"]
   },{
    "Header": "Reading",
    "Lessons":["We read Dr.Seuss's Cat in the Hat, Horton Hears a Who, and the Lorax"]
   }, {
    "Header": "Reminder",
    "Lessons": ["Prepare for adding/subtracting fraction quiz tomorrow"]
  }]
 }
}

//Post 3
posts[2] = {"Avatar": {
  "Poster": "Ms.Laura",
  "src": "graphics/laura.png",
},"Content": {
   "Date": "May 8th, 2017",
   "Header": "Happy Dr.Seuss Day!",
   "Subjects": [{
    "Header": "Math",
    "Lessons":["Multiplying Fractions"]
   },{
    "Header": "Art",
    "Lessons":["The kids will make their own cat in the hats"]
   },{
    "Header": "Reading",
    "Lessons": ["Dr.Seuss's Cat in the Hat, Horton Hears a Who, and the Lorax"]
   }, {
    "Header": "Reminder",
    "Lessons": ["Keep your kids engaged in the reduce/reuse/recycle process"]
  }]
 }
}

//Post 4
posts[3] = {"Avatar": {
  "Poster": "Ms.Laura",
  "src": "graphics/laura.png",
},"Content": {
   "Date": "May 7th, 2017",
   "Header": "Good Afternoon Parents!",
   "Subjects": [{
    "Header": "Math",
    "Lessons":["Adding/Subtracting Fractions"]
   },{
    "Header": "Science",
    "Lessons":["We are starting our unit on rocks"]
   },{
    "Header": "Reading",
    "Lessons": ["Started our poetry sections"]
   }, {
    "Header": "Reminder",
    "Lessons": ["Dr.Seuss Day is tomorrow"]
  }]
 }
}


//Comment-Post 1
commentStorage[0] = []
commentStorage[0].push({"Avatar":{
  "Poster": "Sara",
  "src": "graphics/sara.png"
  },
  "Comment":{
   "Date": "March 10th, 2017 7:25:00 PM",
   "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
 }
});

function createAgenda(agenda, priority, comments) {
  agendaElement = $("<div></div>").addClass("agenda");
  avatarElement = $("<div></div>").addClass("avatar");
  avatarElement.append("<img class='avatar-pic' src='"+agenda.Avatar.src+"'/>");
  avatarElement.append("<span class='poster'>"+agenda.Avatar.Poster +"</div>");
  avatarElement.append("<span class='glyphicon glyphicon-envelope'></span>");
  agendaElement.append(avatarElement);
  infoElement = $("<div class='info'></div>");
  contentElement = $("<div class='content'></div>")
  content = agenda.Content
  dateElement = $("<div class='date'><p>"+agenda.Content.Date+"</p><div class='spacer'></div></div>")
  contentElement.append(dateElement);
  dailyElement = $("<div class='daily spacer'></div>");
  primaryElement = $("<div class ='primary'></div>");
  primaryElement.append("<div class='header'><p>"+content.Header + "</p></div>")
  indentElement = $("<div class='indent'></div>");
  subjects = content.Subjects;
  for (i=0; i < subjects.length; i++) {
    subject = subjects[i];
    secondaryElement = $("<div class='secondary'></div>");
    isReminder = (subject.Header == "Reminder") ? true : false;
    if (isReminder)
      {
          secondaryElement.append("<div class='header'><p class='reminder'>"+subject.Header+"</p></div>")
      }else {
          secondaryElement.append("<div class='header'><p>"+subject.Header+"</p></div>")
     }
    secondaryIndentElement = $("<div class='indent'></div>");
    lessons = subject.Lessons;

    for (j=0; j < lessons.length; j++) {
      lesson = subject.Lessons[j];
      tertiaryElement = $("<div class='tertiary'></div>");
      tertiaryElement.append("<div class='action'><p>"+lesson+"</p></div>")
      secondaryIndentElement.append(tertiaryElement);
    }
    secondaryElement.append(secondaryIndentElement);
    indentElement.append(secondaryElement);
  }
  primaryElement.append(indentElement);
  dailyElement.append(primaryElement);
  contentElement.append(dailyElement);
  infoElement.append(contentElement);


  //Comments
  commentsElement = $("<div class='comments'></div>");
  commentEntry = $("<div id='"+priority+"' class='comment-entry'></div>");
  commentEntry.append("<textarea data-adaptheight class='comment-box' placeholder='Write a comment...'>");
  postRow = $("<div id='"+priority+"' class='post-row'></div>");
  postRow.append("<button class='private-comment btn btn-success'>Post</button>");
  commentEntry.append(postRow);
  commentsElement.append(commentEntry);


  commentEntries = $("<div class='entries-container'></div>");
  collapseContainer = $("<div id='"+priority+"'></div>");
  collapseContainer.append("<p class='big-comment-header'>Comments("+comments.length+")</p>");
  collapseContainer.append("<span class='glyphicon glyphicon-chevron-down' aria-hidden='false'></span>");
  commentEntries.append(collapseContainer);
  moreContainer = $("<div class='more-container'></div>");
  for (x=comments.length-1; x>=0; x--) {
    comment = comments[x];
    entry = $("<div class='entry'></div>");
    comment_container = $("<div class='comment-container'></div>");
    comment_header = $("<div class='comment-header'></div>");
    avatar = $("<div class='avatar'></div>");
    avatar.append("<img class='avatar-pic' src='"+ comment.Avatar.src+"'>")
    avatar.append("<span class='poster'>"+comment.Avatar.Poster+"</span>")
    comment_header.append(avatar);
    comment_header.append("<div class='comment-date'><p>"+comment.Comment.Date+"</p></div>");
    comment_container.append(comment_header);
    comment_container.append("<div class='comment'>"+comment.Comment.Text)
    entry.append(comment_container);
    moreContainer.append(entry);
  }
  commentEntries.append(moreContainer);
  commentsElement.append(commentEntries);
  infoElement.append(commentsElement);
  agendaElement.append(infoElement);
  $("#agenda-list").append(agendaElement);
}

//growable text area
function makeTextAreasGrowable() {
  function adjustHeight(el, minHeight) {
      // compute the height difference which is caused by border and outline
      var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
      var diff = outerHeight - el.clientHeight;

      // set the height to 0 in case of it has to be shrinked
      el.style.height = 0;

      // set the correct height
      // el.scrollHeight is the full height of the content, not just the visible part
      el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
  }

  // we use the "data-adaptheight" attribute as a marker
  var textAreas = [].slice.call(document.querySelectorAll('textarea[data-adaptheight]'));
  // iterate through all the textareas on the page
  textAreas.forEach(function(el) {

      // we need box-sizing: border-box, if the textarea has padding
      el.style.boxSizing = el.style.mozBoxSizing = 'border-box';

      // we don't need any scrollbars, do we? :)
      el.style.overflowY = 'hidden';

      // the minimum height initiated through the "rows" attribute
      var minHeight = el.scrollHeight;

      el.addEventListener('input', function() {
          adjustHeight(el, minHeight);
      });

      // we have to readjust when window size changes (e.g. orientation change)
      window.addEventListener('resize', function() {
          adjustHeight(el, minHeight);
      });

      // we adjust height to the initial content
      adjustHeight(el, minHeight);

  });
}

//Bootstrapping
  function bootstrap() {
    for (a = 0; a < posts.length; a++) {
      if (commentStorage[a] == undefined) {
        commentStorage[a] = []
      }
      createAgenda(posts[a], a, commentStorage[a]);
    }

    $(".glyphicon").css("cursor", "pointer");

    $(".glyphicon").on("mouseover", function(e) {
      $(e.currentTarget).css("color", "#0ca001");
    });


    $(".glyphicon").on("mouseout", function(e) {
      $(e.currentTarget).css("color", "inherit");
    });

    //collapse code
    $(".glyphicon").on("click", function(e) {
      qual = $(e.currentTarget).hasClass("glyphicon-chevron-up") || $(e.currentTarget).hasClass("glyphicon-chevron-down")
      if (!qual) {
        return
      }
      collapse = $(e.currentTarget).hasClass("glyphicon-chevron-up");
      id = $(e.currentTarget).parent().attr("id");
      if (collapse == true) {
        $(".more-container").eq(id).hide("fast");
        $(e.currentTarget).attr("class", "glyphicon glyphicon-chevron-down")
      } else {
        $(".more-container").eq(id).show("fast");
        $(e.currentTarget).attr("class", "glyphicon glyphicon-chevron-up")
      }
    });

    $(".glyphicon.glyphicon-envelope").on("click", function(e) {
      $("#messages").click();
    });

    makeTextAreasGrowable();

    privateComments = $(".private-comment");
    for (i=0; i< privateComments.length; i++) {
      $(".private-comment").eq(i).on("click", function(e){
        id = $(e.currentTarget).parent().attr("id");
        textbox = $(".comment-box").eq(id);
        comment_text = $(".comment-box").eq(id).val();
        container = $(".more-container").eq(id)
        var d = new Date();
        postComment(comment_text,d.toString(),container,id);
        textbox.val("");
        textbox.attr("focus", false);
        $(e.currentTarget).blur();
        $(".big-comment-header").eq(id).html("Comments("+commentStorage[Number(id)].length+")");
      });
    }
  }
