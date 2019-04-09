var Calculadora = (function(document, undefined){
  var error_op = "Operación no soportada.";
  var newVal = false,
      maxLen = 9,
      nOp1 = 0,
      nOp2 = 0,
      result = 0,     
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