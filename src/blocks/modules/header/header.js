import Swal from 'sweetalert2/dist/sweetalert2.all.min';

const btnErrorMessage = document.querySelectorAll('.js-error-message');

const errorModal = function (data) {
    for (const element of data) {
        element.addEventListener('click', function () {
            Swal.fire({
                title: 'Error!',
                text: 'This functionality is not yet available',
                icon: 'error',
                confirmButtonText: 'Close'
            }).then(r => 'Error');
        })
    }
}

errorModal(btnErrorMessage);
