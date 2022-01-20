const $form = document.querySelector('#myForm');

// Bootstrap Modal Obj definition
var okModal = new bootstrap.Modal(document.querySelector('#okModal'), {
  keyboard: false,
});

var errorModal = new bootstrap.Modal(document.querySelector('#errorModal'), {
  keyboard: false,
});

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: { Accept: 'application/json' },
  });
  if (response.ok) {
    this.reset();
    okModal.show();
  } else {
    errorModal.show();
  }
}
