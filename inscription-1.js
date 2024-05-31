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