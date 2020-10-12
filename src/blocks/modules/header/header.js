import Swal from 'sweetalert2/dist/sweetalert2.all.min';

const btnErrorMessage = document.querySelectorAll('.js-error-message');

const errorModal = function (elements) {
    for (const element of elements) {
        element.addEventListener('click', function () {
            Swal.fire({
                title: 'Недоступно!',
                text: 'Эта функция пока недоступна',
                icon: 'error',
                confirmButtonText: 'Close'
            }).then(error => `ERROR: ${error}`);
        })
    }
}

errorModal(btnErrorMessage);
