var blackout_css = document.createElement("style");
var blackout_css_content = document.createTextNode(
	"#blackout {color: red;}"
	);
blackout_css.appendChild(blackout_css_content);

var para=document.createElement("p");
var node=document.createTextNode("This is new.");
para.appendChild(node);

var para2=document.createElement("p");
var node2=document.createTextNode("This is new.");
para2.appendChild(node2);

var element=document.getElementById("blackout");
element.appendChild(para);
element.appendChild(para2);
element.appendChild(blackout_css);
