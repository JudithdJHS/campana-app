// TUS CLAVES REALES
        const firebaseConfig = {
          apiKey: "AIzaSyCO9aonuABDfwjRjmUTKnPGgKRfNVP5VjU",
          authDomain: "campana-fundacion.firebaseapp.com",
          projectId: "campana-fundacion",
          storageBucket: "campana-fundacion.firebasestorage.app",
          messagingSenderId: "641556114718",
          appId: "1:641556114718:web:0de23bcb20481b19a86d0f"
        }; 
 async function senmailer(formData)=>
{
 alert('entra');
 console.log(formData);
      await fetch("https://connect.mailerlite.com/api", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                 "Authorization": "BearereyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzJlZTJhZWU4YWY4MmU0NjU5NjFhOTc3ODA2N2VlNzI3NWExMzZhMTNkNTQzMTUzNjVmMWU1N2MwZjBmODQ1ZjY3OTcwM2FmZWIzZTZhZGQiLCJpYXQiOjE3NjkxNzI3MjMuMDMzNzAzLCJuYmYiOjE3NjkxNzI3MjMuMDMzNzA3LCJleHAiOjQ5MjQ4NDYzMjMuMDI1OTk5LCJzdWIiOiIxNDY1MDcyIiwic2NvcGVzIjpbXX0.Gmn7PqryNo_RJJ-fxqv-rN0b-7BVUn0028BZZa65eX4tXkoAj3A2g2b5iW9_puNYGV7VyoD2ljDMmEO2eL07mT-J9lAXxDV8rNbmsY3Roj7AL14cbS4xMkiCQJb87591-CpYM_0SKpnbLF2cFa--Ery96ZaXdFawlIqGVN31lecGcVVm5O1eSD3BLg1dMZN4jFiZ8AyG2yMt4TE55NiSW60v6mV1u0Rfwbr4m7h07PCOi8KDLZNkRpakyZLoKzrzHIPwdeBAiTqWjKZJOPVhlHTab9Cjo9olHPblKDBXdN-BUC50v9tWvywRBLug2fqU2Bt-qPnklIIndlcbKtmmhsjDQRrjmGafy8idY0MoMUh-d6QyaqDly8fUYK_Sb0i4xbzDkDzSH9qSVLyQo6Zo-C5_a015AYNN6DFcqJZMA-SXCL6naTcXLckhULppgwD63OU2OlIdbCydS_LU3c2gaa-CbU5tDAB_mLbGOkryuhA91xDtl-qvHTq62V2m16VE4RvdyXjSTdBX-KeGyxMAenwnOuojYGyp5Bm8R7fBIU5gIGO04VW5np3g3ym9HEij4GtA1KTtOJ0nBLs7r9lYxQ9DsNHq73h8IyN3-XR2pccf0Ofu2Krnnn2Y9iFKNOaWlTJb1Koa925NZHH4RBR0FSwwrQ9MHEJtFIXWK57bpY8"},
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.toLowerCase(),
          origen: "toca_la_campana",
          fecha: new Date().toISOString()
        })
      });
}
export{firebaseConfig,senmailer}
