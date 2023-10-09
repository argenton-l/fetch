const div = document.getElementById('users')
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const urlComments = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         console.log(data)

//         return data.map((user) => {
//             let li = document.createElement('li');
//             li.innerHTML = `${user.name} (${user.username})`
//             div.appendChild(li)
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })

async function getUsers() {
    const resp = await fetch(urlUsers);
    const user = await resp.json();

    return user.map((users) => {
        let li = document.createElement('li');
        li.innerHTML = `${users.name}  (${users.username})`
        div.appendChild(li)
    })
}

async function getComments(postId, id) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}&id=${id}`);
    const comment = await resp.json();
    console.log(comment);
    return div.innerHTML = `<pre> ${JSON.stringify(comment, null, "\t")} </pre>`;

}

// .map((comments) => {
//     let span = document.createElement('span');
//     let li = document.createElement('li');
//     li.innerHTML =
//         `<br><label>Post Id: </label>&nbsp${comments.postId}<br>
//              <label>Id: </label>&nbsp${comments.id}<br>
//              <label>Name: </label>&nbsp${comments.name}<br>
//              <label>Body: </label>&nbsp${comments.body}`

//     div.appendChild(span)
//     span.appendChild(li)
// })

getUsers();
getComments(4, 16);