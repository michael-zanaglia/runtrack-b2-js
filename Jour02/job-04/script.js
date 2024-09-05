document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-add-student");
    const p = document.getElementById("isSubmit");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        fetch("request.php",{
            method: 'POST',
            body : formData
        })
        .then(response => {
            // Vérification si la réponse est bien JSON
            if (!response.ok) {
                throw new Error("Erreur serveur : " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            p.textContent = data['msg'];
        })
        .catch(err => {
            p.textContent = "Erreur : " + err;
        });

    })
})