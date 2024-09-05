document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-search-student");
    const tbody = document.getElementById("tbod");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        const params = new URLSearchParams();
        
        for(const [k,v] of formData.entries()){
            params.append(k,v);
        } 

        fetch(`request.php?${params.toString()}`,{
            method: 'GET',
        })
        .then(response => {
            // Vérification si la réponse est bien JSON
            if (!response.ok) {
                throw new Error("Erreur serveur : " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if(Array.isArray(data.msg)){
                console.log("1",data)
                const rows = data.msg.map(item => `<tr>
                                <td>${item.id}</td>    
                                <td>${item.grade_id}</td>
                                <td>${item.email}</td>
                                <td>${item.fullname}</td>
                                <td>${item.gender}</td>
                                <td>${item.birthdate}</td>
                            </tr>`)
                tbody.innerHTML = rows;            
            } else {
                const row = `<tr>
                                <td colspan="6">Aucun Article trouve</td>
                             </tr>`
                tbody.innerHTML = row;
                
            }
            
        })
        .catch(err => {
            const p = document.createElement("p");
            p.innerHTML = err
            document.body.appendChild(p);
        });

    })
})