document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    document.getElementById('copyButton').addEventListener('click', function(){
      alert("تم نسخ النص")
    })
    document.getElementById('copyButton2').addEventListener('click', function(){
      alert("تم نسخ النص")
    })
    document.getElementById('copyButton3').addEventListener('click', function(){
      alert("تم نسخ النص")
    })
  });

 
 