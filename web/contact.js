
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');

                const formData = new FormData(event.target);
            });
        });
    });


    var zip = document.getElementById('zipCode');
    var maskOptions = {
        mask: '00-000'
    };
    var zipMask = IMask(zipCode, maskOptions);

    var phone = document.getElementById('phone');
    var maskOptions = {
        mask: '000 000 000'
    };
    var phoneMask = IMask(phone, maskOptions);


})();