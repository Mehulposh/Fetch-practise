const promise = fetch("https://dummyjson.com/users");

promise.then(function(rawData){
    rawData.json().then(function(finalData){
        console.log(finalData);


        const listWrapper = document.querySelector(".list");

        if (!listWrapper) {
            console.error("List wrapper not found!");
            return;
        }
    
        const users = finalData.users;

        for(let i =0;i<users.length;i++){
            const liEle = document.createElement("li");
            liEle.textContent = users[i].firstName +" "+ users[i].lastName;
            listWrapper.append(liEle);
        }

        createTable(users);
    });
})
.catch(function(error){
    console.error(error);
});



function createTable(data) {
    const container = document.querySelector(".table-container");

    if (!container) {
        console.error("Table container not found!");
        return;
    }

    const table = document.createElement("table");
    table.className = "table table-bordered table-striped border border-3";//bootstrap classes for table

    //table header row

    const headerRow = document.createElement("tr");
    const headers = ["ID" , "First Name" , "Last Name" ,"Age" , "Email","Phone"];

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

        const cells = [user.id,user.firstName,user.lastName,user.age,user.email,user.phone];

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