// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


        let u
        let url = new URL('https://jsonplaceholder.typicode.com/users');
        fetch(url)
                .then(value => value.json())
                .then(posts =>{
                    console.log(posts)
                    for (const postElement of posts) {
                        let p = document.createElement('p')
                        let div = document.getElementById('info_user')
                        let btn = document.createElement('button')
                        let btnDel = document.createElement('button')

                        div.append(p, btn, btnDel)
                        document.body.appendChild(div)


                        p.innerText = `ID: ${postElement.id} Name: ${postElement.name}`
                        btn.innerText = 'DETAILS'
                        btnDel.innerText = 'DELETE'


                        btn.addEventListener('click',()=>
                            document.location.href = `details-user.html?userID=${postElement.id}`
                        )
                        btnDel.addEventListener('click',()=>{
                            p.style.display = 'none';
                            btn.style.display = 'none';
                            btnDel.style.display = 'none';
                        })


                    }
                })


