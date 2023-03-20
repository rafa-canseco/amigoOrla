function sendMail(event){
  event.preventDefault();
var params = {
   name : document.getElementById("name").value,
   email : document.getElementById("email").value,
   telefono : document.getElementById("telefono").value,
   message : document.getElementById("message").value,
};

  const servicesID = "service_sj0o61e";
  const templateID = "template_plaecza";

  emailjs
  .send(servicesID,templateID,params)
    .then((res) => {
      console.log("se hizo click")
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Tu mensaje fue enviado correctamente. En breve un asesor se pondrá en contacto contigo.");
    })
    .catch((err) => console.log(err));
}
