async function getComment(){
    let res =await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts=await res.json()
    posts=posts.slice(0,6)
    let posttable=document.getElementById("posttable")
    posts.forEach(post => {
        let row=document.createElement("tr")
        row.innerHTML=`
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        `
        posttable.appendChild(row)
    });

}
getComment();