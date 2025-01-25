const promise = fetch("https://dummyjson.com/users");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{

    promise.then(function(rawData){
    rawData.json().then(function(finalData){
        console.log(finalData);


        // const listWrapper = document.querySelector(".list");
        // listWrapper.className = "bg-warning"

        // if (!listWrapper) {
        //     console.error("List wrapper not found!");
        //     return;
        // }
    
        const users = finalData.users;

        // for(let i =0;i<users.length;i++){
        //     const liEle = document.createElement("li");
        //     const imgEle = document.createElement("img");
        //     imgEle.src = users[i].image;
        //     imgEle.alt = "Placeholder Image"; 
        //     imgEle.width = 150;              
        //     imgEle.height = 150; 
        //     listWrapper.appendChild(imgEle);
        //     liEle.textContent = users[i].firstName +" "+ users[i].lastName ; 
        //     listWrapper.append(liEle);
        // }

        createTable(users);


    });
    })
    .catch(function(error){
        console.error(error);
    });

})


function createTable(data) {
    const container = document.querySelector(".table-container");

    if (!container) {
        console.error("Table container not found!");
        return;
    }

    const table = document.createElement("table");

    //bootstrap classes for table
    table.className = "table table-bordered table-striped border border-3";

    //table header row

    const headerRow = document.createElement("tr");
    const headers = ["ID" , "First Name" , "Last Name" ,"Age" , "Email", "Phone", "University"];

    headers.forEach((header) =>{
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.append(th);
    });

    //append the headerRow into the table
    table.appendChild(headerRow);

    //create data inside each cell 
    data.forEach((user) =>{
        const row = document.createElement("tr");

        const cells = [user.id,user.firstName,user.lastName,user.age,user.email,user.phone,user.university];

        cells.forEach((cell)=>{
            const td = document.createElement("td");
            td.textContent = cell;

            //append the td into row
            row.appendChild(td);
        });

        //append the row into the table
        table.appendChild(row);
    });

    //append the table into the container
    container.append(table);
}