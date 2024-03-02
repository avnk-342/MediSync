const firebaseConfig = {
    apiKey: "AIzaSyAi-3SUcw2liTTYT7dI9Bbl7cyzlWBQU4E",
    authDomain: "medisync-7fb13.firebaseapp.com",
    databaseURL: "https://medisync-7fb13-default-rtdb.firebaseio.com",
    projectId: "medisync-7fb13",
    storageBucket: "medisync-7fb13.appspot.com",
    messagingSenderId: "429409329312",
    appId: "1:429409329312:web:fc2bfb63b47fb78403e9c5",
    measurementId: "G-3Y525JD5R5"
};

firebase.initializeApp(firebaseConfig);
var medinfodb = firebase.database().ref('Personal Information');

document.getElementById("Personal Information").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var age = getElementVal("age");
    var dob = getElementVal("dob");
    var email = getElementVal("email");
    var gender = getElementVal("gender");
    var phoneNumber = getElementVal("phoneNumber");

    if (name && age && dob && email && gender && phoneNumber) {
        saveMessages(name, age, dob, phoneNumber, email, gender);

        //   enable alert
        document.querySelector(".alert").style.display = "block";

        //   remove the alert
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        //   reset the form
        document.getElementById("Personal Information").reset();
    } else {
        // Handle the case where some fields are not filled in
        alert("Please fill in all the required fields.");
    }
}

const saveMessages = (name, age, dob, gender, phoneNumber, email) => {
    var newmedisync = medinfodb.push();

    newmedisync.set({
        name: name,
        age: age,
        dob: dob,
        gender: gender,
        phoneNumber: phoneNumber,
        email: email,
    });
};

const getElementVal = (id) => {
    var element = document.getElementById(id);
    return element ? element.value : null;
};

// Function to navigate to the next form
/*function nextForm(currentFormId, nextFormId) {
    const currentForm = document.getElementById(currentFormId);
    const nextForm = document.getElementById(nextFormId);

    if (currentForm && nextForm) {
        currentForm.style.display = 'none';
        nextForm.style.display = 'block';
    } else {
        console.error('Form not found. Check your form IDs.');
    }
}

// Function to navigate to the previous form
function prevForm(currentFormId, prevFormId) {
    document.getElementById(currentFormId).style.display = 'none';
    document.getElementById(prevFormId).style.display = 'block';
}

function addMedication() {
    const medicationsContainer = document.getElementById('medicationsContainer');
    const medicationDiv = document.createElement('div');
    medicationDiv.className = 'medication-entry';
    medicationDiv.innerHTML = `
        <label>Medication Name:</label>
        <input type="text" class="medicationName" placeholder="Enter medication name">

        <label>Dosage:</label>
        <input type="text" class="dosage" placeholder="Enter dosage">

        <label>Frequency/Time:</label>
        <input type="text" class="frequency" placeholder="Enter frequency/time">

        <label>Duration (How long have they been taking this medication?):</label>
        <input type="text" class="medicationDuration" placeholder="Enter duration">
    `;
    medicationsContainer.appendChild(medicationDiv);
}

function saveMedicalInfo() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    const bloodType = document.getElementById('bloodType').value;
    const chronicDiseases = document.getElementById('chronicDiseases').value;
    const allergies = document.getElementById('allergies').value;
    const previousSurgeries = document.getElementById('previousSurgeries').value;

    const medications = Array.from(document.querySelectorAll('.medication-entry')).map(medicationEntry => ({
        name: medicationEntry.querySelector('.medicationName').value,
        dosage: medicationEntry.querySelector('.dosage').value,
        frequency: medicationEntry.querySelector('.frequency').value,
        duration: medicationEntry.querySelector('.medicationDuration').value,
    }));

    const hospiceCare = document.getElementById('hospiceCare').value;
    const hospiceDetails = hospiceCare === 'Yes' ? document.getElementById('hospiceDetailsText').value : '';

    const smokingHabits = document.getElementById('smokingHabits').value;
    const alcoholConsumption = document.getElementById('alcoholConsumption').value;
    const exerciseRoutine = document.getElementById('exerciseRoutine').value;
    const dietaryPreferences = document.getElementById('dietaryPreferences').value;

    const emergencyContactName = document.getElementById('emergencyContactName').value;
    const relationship = document.getElementById('relationship').value;
    const emergencyContactPhoneNumber = document.getElementById('emergencyContactPhoneNumber').value;

    const additionalNotes = document.getElementById('additionalNotes').value;

    const medicalData = {
        fullName,
        dob,
        email,
        mobileNumber,
        gender,
        occupation,
        bloodType,
        chronicDiseases,
        allergies,
        previousSurgeries,
        medications,
        hospiceCare,
        hospiceDetails,
        smokingHabits,
        alcoholConsumption,
        exerciseRoutine,
        dietaryPreferences,
        emergencyContactName,
        relationship,
        emergencyContactPhoneNumber,
        additionalNotes,
    };

    // Save data to Firebase Realtime Database
    const medicalRecordsRef = database.ref('medicalRecords');
    medicalRecordsRef.push(medicalData);

    alert('Medical information saved successfully!');
}

// Function to switch to the next form


// Function to switch to the next form
function nextForm(currentFormId, nextFormId) {
    document.getElementById(currentFormId).style.display = 'none';
    document.getElementById(nextFormId).style.display = 'block';
}

// Function to switch back to the previous form
function prevForm(currentFormId, prevFormId) {
    document.getElementById(currentFormId).style.display = 'none';
    document.getElementById(prevFormId).style.display = 'block';
}

// Function to handle form submission
function submitForm() {
    // Get form data
    const formData = {
        fullName: document.querySelector('#fullName').value,
        // Add other form fields here
    };

    // Add data to Firebase Realtime Database
    const usersRef = db.ref('users');
    usersRef.push(formData, (error) => {
        if (error) {
            console.error("Error adding document: ", error);
        } else {
            console.log("Document added successfully!");
            // You can redirect or show a success message here
        }
    });
}*/