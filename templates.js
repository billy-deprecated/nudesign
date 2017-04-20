var templates = {
	bulletin: "<div> This is where bulletin will be </div>",

	grades: 
"<div id='wrapper'>" +
    "<div id='leftBar'>" +
    	"<table id='overall'>" +
    	"<caption id='gradetablecaption'>Overall Grades</caption>" +
    	"<tr>" +
    	"<th>Subject</th>" +
    	"<th>Grade</th>" +
    	"</tr>" +

    	"<tr>" +
    	"<td>Math</td>" +
    	"<td>90%</td>" +
    	"</tr>" +

    	"<tr>" +
    	"<td>Reading</td>" +
    	"<td>80%</td>" +
    	"</tr>" +

    	"<tr>" +
    	"<td>Science</td>" +
    	"<td>100%</td>" +
    	"</tr>" +

    	"<tr>" +
    	"<td>Art</td>" +
    	"<td>75%</td>" +
    	"</tr>" +

    	"</table>" +
    "</div>" +
    "<div class='divider'></div>" +
    "<div id='rightBar'>" +
    	"<select>" +
    		"<option>Math</option>" +
    		"<option>Reading</option>" +
    		"<option>Science</option>" +
    		"<option>Art</option>" +
    	"</select>" +
    "</div>" +
"</div>",

	messages:
"<div class='section-title'>Messages " +
"</div>"+
"<div id='messages-container'>"+
"  <div id='messages-list'>"+
"  </div>"+
"  <input type='text' id='messages-input'/>"+
"</div>"
};
