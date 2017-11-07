$( document ).ready(function() {

  // Cube triggers
  $('.shape').shape();
  $('#pizzaTriggerLeft').click(function(){
      $('.shape').shape('flip left');
  });
  $('#pizzaTriggerUp').click(function(){
      $('.shape').shape('flip up');
  });
  $('#pizzaTriggerDown').click(function(){
      $('.shape').shape('flip down');
  });
  $('#pizzaTriggerRight').click(function(){
      $('.shape').shape('flip right');
  });

  $('.ui.dropdown')
  .dropdown();

  $('.ui.dropdown')
  .dropdown({
    allowAdditions: true
  });

  $('.ui.normal.dropdown.pizzaStyle')
  .dropdown({
    maxSelections: 1,
    allowAdditions: true
  });

  $('.ui.modal')
  .modal('attach events', '#submit-form', 'show');

// Validation
  function validateForm() {
    $('#formContainer form').form({
      on: 'blur',
      fields: {
        dropdown: {
          identifier  : 'fav_style',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please select a dropdown value'
            }
          ]
        }
      }
    });
  }

   // URL to Send AJAX: https://script.google.com/macros/u/0/s/AKfycbwYeRwccVrYecekG7mTaQ_g3006hpSDe7rHAb2Cu9qDaYZ1CXE/exec

  var $form = $('form#pizzaPoll'),
  url = 'https://script.google.com/macros/s/AKfycbwYeRwccVrYecekG7mTaQ_g3006hpSDe7rHAb2Cu9qDaYZ1CXE/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    validateForm();
    showFormConfirmation();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    }).success(

    );
  })

  function showFormConfirmation() {
    $('#form-container').fadeOut('fast');
    $('#confirm-dialogue').fadeIn('fast');
  }

  // soundcloud embed
  
  var iframeElement   = document.querySelector('iframe');
  var iframeElementID = iframeElement.id;
  var widget          = SC.Widget(iframeElement);

  function closeMusic() {
    $('#player-container').fadeOut("slow");
    widget.pause();    
    $('#open-player').fadeIn("slow");
  }

  function openMusic() {
    $('#open-player').fadeOut("slow"); 
    $('#player-container').fadeIn("slow");
    widget.play();    
  }

  $('.remove.icon').click(function() {
    closeMusic();
  });

  $('#open-player').click(function() {
    openMusic();
  });

 


});