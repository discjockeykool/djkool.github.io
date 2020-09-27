function sendContact(){
	var fn=document.getElementById("fullname").value;
	var em=document.getElementById("email").value;
	var sub=document.getElementById("subject").value;
	var mess=document.getElementById("message").value;
	Email.send({
		Host:"smtp.gmail.com",
		Username:"discjockeykool@gmail.com",
		Password:"Djkool1234",
		To:"Djkool077@gmail.com",
		From:"discjockeykool@gmail.com",
		Subject:"Contact message",
		Body:"Contact Information:"+"<br>"+"<br>"+"FullName: "+fn+"<br>"+"Email: "+em+"<br>"+"Subject :"+sub+"<br>"+"Message: "+mess,

	})
}