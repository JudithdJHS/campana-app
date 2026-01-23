 // TUS CLAVES REALES
       const firebaseConfig = {
          apiKey: "AIzaSyCO9aonuABDfwjRjmUTKnPGgKRfNVP5VjU",
          authDomain: "campana-fundacion.firebaseapp.com",
          projectId: "campana-fundacion",
          storageBucket: "campana-fundacion.firebasestorage.app",
          messagingSenderId: "641556114718",
          appId: "1:641556114718:web:0de23bcb20481b19a86d0f"
        }; 
const senmailer = async (formData) =>{
 alert('entra');
 console.log(formData);
      await fetch("https://connect.mailerlite.com/api", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                 "Authorization": ""},
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.toLowerCase(),
          origen: "toca_la_campana",
          fecha: new Date().toISOString()
        })
      });
}

