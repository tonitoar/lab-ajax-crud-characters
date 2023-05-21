const charactersAPI = new APIHandler('http://localhost:3000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(infoCharacter => {
      console.log(infoCharacter)
    })

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()
    .then(infoCharacter => {
      console.log(infoCharacter)
    })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
    .then(infoCharacter => {
      console.log(infoCharacter)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister()
    .then(infoCharacter => {
      console.log(infoCharacter)
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister()
    .then(infoCharacter => {
      console.log(infoCharacter)
    })
  });
});
