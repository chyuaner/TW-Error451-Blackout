//套上CSS樣式
var blackout_css = document.createElement("style");
var blackout_css_content = document.createTextNode(
	"#blackout {\n				display: block;\n				position: absolute;\n				\n				left: 3%;\n				top: 3%;\n				bottom: 3%;\n				right: 3%;\n				\n				padding: 2rem;\n				\n				border: 1px black solid;\n				border-radius: 10px;\n				\n				background-color: white;\n			}\n			\n			#blackout .blackout-footer {\n				text-align: center;\n			}\n			#blackout .blackout-btn {\n				border: 1px black solid;\n				padding: 0.3rem;\n			}"
	);
blackout_css.appendChild(blackout_css_content);

//騰寫抗議內容
var title = document.createElement("h1");
var title_content = document.createTextNode("ERROR 541");
title.appendChild(title_content);

var title2 = document.createElement("h2");
var title2_content = document.createTextNode("本網頁基於國家法律而封鎖");
title2.appendChild(title2_content);

var content1 = document.createElement("p");
var content1_content = document.createTextNode("為何看到這個畫面？");
content1.appendChild(content1_content);

var content2 = document.createElement("p");
var content2_content = document.createTextNode("針對中華民國經濟部智慧財產局（以下簡稱智財局）日前發布新聞稿，稱將研議相關法案，針對境外重大侵權網站，擬建立快速處置措施，令網路服務提供者（ISP）予以封鎖乙事，本網站表示強烈反對。並呼籲政府相關單位停止討論任何類似美國SOPA的法案，以維護資訊流通與祕密通訊自由。如果我們不積極爭取，有一天，可能將會真的看到類似如此的");
	var content2_content_a1 = document.createElement("a");
	content2_content_a1.setAttribute("href", "http://binb.tw/?p=407");
	var content2_content_a1_content = document.createTextNode("ERROR 451 錯誤");
	content2_content_a1.appendChild(content2_content_a1_content);
var content2_content2 = document.createTextNode("。");
content2.appendChild(content2_content);
content2.appendChild(content2_content_a1);
content2.appendChild(content2_content2);

var content3 = document.createElement("p");
var content3_content = document.createTextNode("更多訊息請閱讀：");
	var content3_content_a = document.createElement("a");
	content3_content_a.setAttribute("href", "https://www.facebook.com/events/486224794784563/");
	content3_content_a.appendChild(document.createTextNode("#freeandopen 斷然反對鎖國！堅決主張百分之百的網路自由！！"));
content3.appendChild(content3_content);
content3.appendChild(content3_content_a);

var footer = document.createElement("p");
footer.setAttribute("class", "blackout-footer");
	var footer_content_close = document.createElement("a");
	footer_content_close.setAttribute("href", "#");
	footer_content_close.setAttribute("class", "blackout-btn");
	footer_content_close.setAttribute("onclick", "document.getElementById('blackout').style.display = 'none'");
	footer_content_close.appendChild(document.createTextNode("繼續瀏覽網頁"));
footer.appendChild(footer_content_close);

//建立抗議內容到#blackout區塊
var element=document.getElementById("blackout");
element.appendChild(blackout_css);
element.appendChild(title);
element.appendChild(title2);
element.appendChild(content1);
element.appendChild(content2);
element.appendChild(content3);
element.appendChild(footer);
