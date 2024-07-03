// const requestOptionsget = {
//     method: "GET",
//     redirect: "follow"
// };

// let view_details = () => {
//     fetch("http://localhost:3000/user_details", requestOptionsget)
//         .then((response) => response.json())
//         .then((result) => form_details_ui(result))
//         .catch((error) => console.error(error));
// }

// let form_details_ui = (result) => {
//     console.log(result);
//     let data_table = `
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Age</th>
//                 <th>Password</th>
//                 <th>Status</th>
//                 <th>Vehicles</th>
//                 <th>Gender</th>
//                 <th>Date of Birth</th>
//                 <th>Salary</th>
//                 <th>Message</th>
//             </tr>
//         </thead>
//         <tbody>`;

//     result.forEach(element => {
//         data_table += `
//             <tr>
//                 <td>${element.name}</td>
//                 <td>${element.email}</td>
//                 <td>${element.phone_number}</td>
//                 <td>${element.age}</td>
//                 <td>${element.password}</td>
//                 <td>${element.status}</td>
//                 <td>${element.vehical.join(', ')}</td>
//                 <td>${element.gender}</td>
//                 <td>${element.date_of_birth}</td>
//                 <td>${element.salary}</td>
//                 <td>${element.message}</td>
//             </tr>`;
//     });

//     data_table += `</tbody>`;
//     document.querySelector(".table1").innerHTML = data_table;
// }

// let submit_form = (event) => {
//     event.preventDefault();
//     const user_name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const phone_number = document.querySelector("#phone-number").value;
//     const age = document.querySelector("#age").value;
//     const password = document.querySelector("#password").value;
//     const gender = document.querySelector("#gender").value;
//     const date_of_birth = document.querySelector("#date-of-birth").value;
//     const salary = document.querySelector("#salary").value;
//     const website = document.querySelector("#website").value;
//     const employment_status = document.querySelector('input[name="status"]:checked').value;
//     const message = document.querySelector("#textarea").value;
//     let checkboxes = document.getElementsByClassName('vehical');
//     let vehical = [];

//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             vehical.push(checkboxes[i].value);
//         }
//     }

//     const user_details_object = {
//         "name": user_name,
//         "email": email,
//         "phone_number": phone_number,
//         "age": age,
//         "password": password,
//         "gender": gender,
//         "date_of_birth": date_of_birth,
//         "salary": salary,
//         "website": website,
//         "vehical": vehical,
//         "status": employment_status,
//         "message": message 
//     };

//     const requestOptions = {
//         method: "POST",
//         body: JSON.stringify(user_details_object)
//     };

//     fetch("http://localhost:3000/user_details", requestOptions)
//         .then((response) => response.text())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));

//     console.log(user_details_object);
// }





// form.js GET and POST both...

const submit_form = (event) => {
    event.preventDefault();

    const user_name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone_number = document.querySelector("#phone-number").value;
    const age = document.querySelector("#age").value;
    const password = document.querySelector("#password").value;
    const gender = document.querySelector("#gender").value;
    const date_of_birth = document.querySelector("#date-of-birth").value;
    const salary = document.querySelector("#salary").value;
    const website = document.querySelector("#website").value;
    const employment_status = document.querySelector('input[name="status"]:checked').value;
    const message = document.querySelector("#textarea").value;
    let checkboxes = document.querySelectorAll('.vehical:checked');
    let vehical = Array.from(checkboxes).map(checkbox => checkbox.value);

    const user_details_object = {
        "name": user_name,
        "email": email,
        "phone_number": phone_number,
        "age": age,
        "password": password,
        "gender": gender,
        "date_of_birth": date_of_birth,
        "salary": salary,
        "website": website,
        "vehical": vehical,
        "status": employment_status,
        "message": message
    };
    console.log(user_details_object);

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user_details_object)
    };

    fetch("http://localhost:3000/user_details", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            console.log("User details submitted successfully!");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to submit user details. Please try again.");
        });

    console.log(user_details_object);
};

const view_details = () => {
    const requestOptionsget = {
        method: "GET",
        redirect: "follow"
    };

    fetch("http://localhost:3000/user_details", requestOptionsget)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            form_details_ui(result);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to fetch user details. Please try again.");
        });
};

const form_details_ui = (result) => {
    let data_table = '';

    if (Array.isArray(result)) {
        result.forEach(element => {
            const vehicles = Array.isArray(element.vehical) ? element.vehical.join(', ') : '';
            data_table +=
                `<tr>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone_number}</td>
                    <td>${element.age}</td>
                    <td>${element.password}</td>
                    <td>${element.gender}</td>
                    <td>${element.date_of_birth}</td>
                    <td>${element.salary}</td>
                    <td>${element.website}</td>
                    <td>${vehicles}</td>
                    <td>${element.status}</td>
                    <td>${element.message}</td>
                </tr>`;
        });
    } else {
        const vehicles = Array.isArray(result.vehical) ? result.vehical.join(', ') : ''; 
        data_table +=
            `<tr>
                <td>${result.name}</td>
                <td>${result.email}</td>
                <td>${result.phone_number}</td>
                <td>${result.age}</td>
                <td>${result.password}</td>
                <td>${result.gender}</td>
                <td>${result.date_of_birth}</td>
                <td>${result.salary}</td>
                <td>${result.website}</td>
                <td>${vehicles}</td>
                <td>${result.status}</td>
                <td>${result.message}</td>
            </tr>`;
    }

    const tbody = document.querySelector(".data-table tbody");
    tbody.innerHTML = data_table;
};


// document.getElementById("user-details-form").addEventListener("submit", submit_form);
// document.getElementById("fetch-details-btn").addEventListener("click", view_details);
