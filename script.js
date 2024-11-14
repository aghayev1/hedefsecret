function findInfo() {
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const resultCard = document.getElementById('result-card');

  fetch(`/get-person-info?name=${name}&surname=${surname}`)
    .then(response => {
      if (!response.ok) throw new Error('No record found');
      return response.json();
    })
    .then(data => {
      resultCard.innerHTML = `
        <h2>Information</h2>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Grade:</strong> ${data.grade}</p>
        <p><strong>Sector:</strong> ${data.sector}</p>
      `;
      resultCard.classList.add('visible');
    })
    .catch(error => {
      resultCard.innerHTML = `<p>${error.message}</p>`;
      resultCard.classList.add('visible');
    });
}
