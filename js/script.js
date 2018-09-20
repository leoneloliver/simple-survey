let resultVal = '';
let hasError = true;
const errorMsg = ['Attention','Please select an option!'];
const errorMsg2 = ['=(','You can not go back. Sorry!'];
const successMsg = ['Thank you =) ','Your choice was: '];

let radios = document.getElementsByName('radio');
let card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function(){    
    if(radios[i].checked){
      resultVal = radios[i].value; 
      for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('selected');
      }
      card[i].classList.add("selected");
    }  
  });
}
const btn = document.getElementById("submit_button");
btn.addEventListener("click", function() {
  if(resultVal){
    //alert(resultVal);
    document.getElementsByClassName('modal-title')[1].innerText = successMsg[0];
    document.getElementsByClassName('modal-body')[1].innerText = successMsg[1]+''+resultVal;
    $("#successModal").modal();
  }else{
    	document.getElementsByClassName('modal-title')[0].innerText = errorMsg[0];
		  document.getElementsByClassName('modal-body')[0].innerText = errorMsg[1];
      $("#errorModal").modal();
  }
});
const btnBack = document.getElementById("back_button");
btnBack.addEventListener("click", function() {
  document.getElementsByClassName('modal-title')[0].innerText = errorMsg2[0];
  document.getElementsByClassName('modal-body')[0].innerText = errorMsg2[1];
  $("#errorModal").modal();
});
