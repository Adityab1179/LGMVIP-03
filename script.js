const form = document.getElementById('registrationForm');
const displayData = document.getElementById('displayData');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const website = form.website.value;
    const gender = form.gender.value;
    const skills = [...form.querySelectorAll('input[name="skills"]:checked')].map(skill => skill.value).join(', ');

    const userData = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    displayData.innerHTML = userData;
    form.reset();
});