function sendEmail(){
	var x=document.getElementById("mail").value;
	Email.send({
		Host:"smtp.gmail.com",
		Username:"discjockeykool@gmail.com",
		Password:"Djkool1234",
		To:"Djkool077@gmail.com",
		From:"discjockeykool@gmail.com",
		Subject:"Subscriber",
		Body:"New Subscriber:"+"<br>"+x,

	})
}