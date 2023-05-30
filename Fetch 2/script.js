fetch("https://cataas.com/api/cats?tags=cute")
    .then((data) => data.json())
    // .then((res)=>console.log(res))
    .then((res) => {
        let tbody = document.getElementById('tb')
        res.forEach((i, index) => {
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            td.innerText = index + 1
            tr.append(td)
            Object.keys(i).forEach((tablekey) => {
                if (tablekey !== "id") {
                    let td = document.createElement("td")
                    td.innerText = i[tablekey];
                    tr.append(td)
                }
            });
            tbody.append(tr)
        })
    })