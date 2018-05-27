var smodal = new Object;
var bgevent  = null;//Background Event Var.
var maxindex = 0;
var maxindexElem;

//buttons Setting
var singleOkButtonValue = "OK"
var singleCancelButtonValue = "Cancel";
//modal
smodal.alert = function(options){
	var t = options.title;
	var str = options.message;
	var bclick = options.backClose;
	var f = options.okFunction;
	smodal.sysclose();
	var modal = document.createElement("div");
	modal.innerHTML = t + '<hr>' + str + '<br><input type="button" class="single-modal-button" id="single-ok-button">';
	var bg = document.createElement("div");
	smodal.close();
	modal.id= "single-modal";
	bg.id = "single-modal-bg";
	if(bclick === true){
	bg.addEventListener('click', smodal.close, false);
	}
	document.body.appendChild(modal);
	document.body.appendChild(bg);
	modal.className="single-modal-opening";
	var okb = document.getElementById("single-ok-button");
	okb.focus();
	okb.value = singleOkButtonValue;
	if(f){
	okb.onclick = new Function("smodal.closeRun('" + f + "')");
	document.getElementById("single-modal-bg").onclick = new Function("smodal.closeRun('" + f + "')");
	}else{
	okb.onclick = new Function("smodal.close()");
	}
}
smodal.confirm = function(options){
	var t = options.title;
	var str = options.message;
	var bclick = options.backClose;
	var yf = options.okFunction;
	var nf = options.cancelFunction;
	smodal.sysclose();
	var modal = document.createElement("div");
	modal.innerHTML = t + '<hr>' + str + '<br><input type="button" class="single-modal-button" id="single-ok-button"> <input type="button" class="single-modal-button" id="single-cancel-button">';
	var bg = document.createElement("div");
	smodal.close();
	modal.id= "single-modal";
	bg.id = "single-modal-bg";
	if(bclick === true){
	bg.addEventListener('click', smodal.close, false);
	}
	document.body.appendChild(modal);
	document.body.appendChild(bg);
	modal.className="single-modal-opening";
	var okb = document.getElementById("single-ok-button");
	okb.focus();
	okb.value = singleOkButtonValue;
	if(yf){
	okb.onclick = new Function("smodal.closeRun('" + yf + "')");
	}else{
	okb.onclick = new Function("smodal.close()");
	}
	var cancelb = document.getElementById("single-cancel-button");
	cancelb.value = singleCancelButtonValue;
	if(nf){
	cancelb.onclick = new Function("smodal.closeRun('" + nf + "')");	
	}else{
	cancelb.onclick = new Function("smodal.close()");
	}
}
smodal.close = function(){
	var modal = document.getElementById("single-modal");
	var bg = document.getElementById("single-modal-bg");
	if(modal){
	modal.className="single-modal-closing";
	}if(bg){
	document.body.removeChild(bg); 
	}
}
smodal.sysclose = function(){
	var modal = document.getElementById("single-modal");
	var bg = document.getElementById("single-modal-bg");
	if(modal){
	document.body.removeChild(modal);
	}if(bg){
	document.body.removeChild(bg); 
	}	
}
smodal.closeRun = function(f){
	smodal.close();
	eval(f);
}
