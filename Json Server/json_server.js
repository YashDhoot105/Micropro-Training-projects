//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             git hub token...............
//git remote set-url origin https://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@github.com/YashDhoot105/Micropro-Training-projects

//Githubtoken2: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          2nd token


const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let fun = () => {
    let input_data_id = document.querySelector("#input-bar-id").value;
    let input_data_title = document.querySelector("#input-bar-title").value;
    let input_data_view = document.querySelector("#input-bar-view").value;
    // console.log(input_data_id);

    // http://localhost:3000/posts/1, http://localhost:3000/posts?title=ab
    fetch(`http://localhost:3000/posts${(input_data_id) ? "/" + input_data_id : (input_data_title) ? "?title=" + input_data_title : (input_data_view) ? "?views=" + input_data_view : ""}`, requestOptions)
        .then((response) => response.json())
        .then((result) => filter(result))
        .catch((error) => console.error(error));
}

let filter = (result) => {
    console.log(result)

    let table_data =
        `<thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Views</th>
            </tr>
        </thead>
        <tbody>`

    if (result instanceof Array) {
        result.forEach(element => {
            table_data +=
                `<tr>
                    <td>${element.id}</td>
                    <td>${element.title}</td>
                    <td>${element.views}</td>
                </tr>`
        });
        console.log("array");

    } else {
        table_data +=
            `<tr>
                    <td>${result.id}</td>
                    <td>${result.title}</td>
                    <td>${result.views}</td>
                </tr>`
        console.log("object");

    }
    table_data += `</tbody>`
    document.querySelector(".data-table").innerHTML = table_data;
};


let add = () => {
    var inputed_id = document.querySelector("#add-input-bar-id").value;
    let inputed_title = document.querySelector("#add-input-bar-title").value;
    let inputed_views = document.querySelector("#add-input-bar-view").value;

    const input_data_object = {
        "id": inputed_id,
        "title": inputed_title,
        "views": inputed_views
    };

    console.log(input_data_object);

    // if (inputed_id == inputed_title == inputed_views != "") {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(input_data_object)
        // body: input_data_object
        // redirect: "follow"
    };

    fetch("http://localhost:3000/posts", requestOptions)
        .then((response) => response.text())
        .then((result) => alert(result))
        .catch((error) => console.error(error));

    document.querySelector("#add-input-bar-id").value = document.querySelector("#add-input-bar-title").value = document.querySelector("#add-input-bar-view").value = "";

    // }
    // else {
    //     alert("Nothing to add !!!");
    // }
}