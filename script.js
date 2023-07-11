function showAlert() {
    alert("Hola");
  }
  
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    var menu = document.querySelector('.menu ul');
    menu.style.display = menu.style.display === 'block' ? '' : 'block';
  });



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtén los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Aquí puedes agregar tu lógica para enviar el formulario o procesar los datos
    // Por ejemplo, puedes hacer una petición AJAX al servidor o mostrar un mensaje de éxito
    
    alert("¡Formulario enviado correctamente!");
    // Limpia el formulario
    document.getElementById("contact-form").reset();
  });