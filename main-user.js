// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


let url = new URLSearchParams(window.location.search)
let userId = url.get('userID');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value => value.json())
.then(user=> {
    console.log(user);
    let div = document.getElementById('info_user')
    for (const key in user) {
        let p = document.createElement('p')
        p.innerText = `${key}: ${JSON.stringify(user[key])}`
        div.appendChild(p)
    }
    let button = document.createElement('button');
    button.innerText = 'Post of current user';
    button.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                div.innerText = '';
                posts.forEach(post => {
                    let postDiv = document.createElement('div');
                    let pTitle = document.createElement('p');
                    let buttonSearchPost = document.createElement('button');

                    pTitle.innerText = `${post.title}`;
                    buttonSearchPost.innerText = 'View Post Details';

                    postDiv.append(pTitle, buttonSearchPost);
                    document.body.appendChild(postDiv);
                });
            })
    });

    div.appendChild(button);
    document.body.appendChild(div);

})
