function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }

  function fetchUsers() {
    const url = "http://localhost:8080/ords/hr2/inscription/";
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const users = data.items;
        console.log(...users.map(user => user.id_utilisateur));
        const maxId = Math.max(...users.map(user => user.id_utilisateur));
        const newId = maxId + 1;

        saveData(newId);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }
function saveData(userId) {
    console.log('next user id ' + userId);
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const data = {
    nom: username,
    mot_de_passe: password
  };

  const url = "http://localhost:8080/ords/hr2/inscription/" + userId;

  fetch(url, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log('Données insérées avec succès!', result);
      displayInsertedData(result.nom_utilisateur); // Appel d'une fonction pour afficher les données insérées
    })
    .catch(error => {
      console.error('Erreur lors de l\'insertion des données :', error);
    });
}

const form = document.getElementById('formulaire');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    fetchUsers();
  });