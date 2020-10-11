import Swal from 'sweetalert2/dist/sweetalert2.all.min';

const btnRegistration = document.querySelector('.error-message');

btnRegistration.onclick = function () {
    Swal.fire({
        title: 'Error!',
        text: 'This functionality is not yet available',
        icon: 'error',
        confirmButtonText: 'Close'
    }).then(r => 'Error');
};
