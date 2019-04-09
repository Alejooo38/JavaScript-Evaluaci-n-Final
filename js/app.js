var Calculadora = (function(document, undefined){
  var error_op = "La operación solicitada no existe.";
  var newVal = false,
      maxLen = 9,
      nOp1 = 0,
      nOp2 = 0,
      result = 0,
      hasPoint = false;
      screenVal = "0",
      idBOp = "";

  var btnsId  = {
    btn_onc  : "on",
    btn_sign : "sign",
    btn_raiz : "raiz",
    btn_div  : "dividido",
    btn_por  : "por",
    btn_menos: "menos",
    btn_punto: "punto",
    btn_igual: "igual",
    btn_mas  : "mas"
  };

   var domBtns;

  function initVars(){
    newVal = false;
    maxLen = 9;
    nOp1 = 0;
    nOp2 = 0;
    result = 0;
    hasPoint = false;
    screenVal = "0",
    idBOp = "";
  }

  var getBtns = function(){
    domBtns = document.getElementsByClassName("tecla");
  }

  var subscribeEvents = function(){
    for(var i = 0, len = domBtns.length; i < len; i++) {
        domBtns[i].onclick = events.eBtnClick;
    }
  }

var events = {
    eBtnClick: function(e){
      switch (this.id) {
        case btnsId.btn_onc  :
          initVars();
          writeDisplay(screenVal);
          break;
        case btnsId.btn_sign :
          setSign();
          writeDisplay(screenVal);
          break;
        case btnsId.btn_raiz :
          break;
        case btnsId.btn_punto:
          addPoint();
          break;
        case btnsId.btn_igual:
          solveOp();
          break;      
        default:
          addNumber(this.id);
      }
    }
  }