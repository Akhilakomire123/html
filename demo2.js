const posts=[{title:'post one',body:'This is post one'},{title:'post two',body:'This is post Two'}];
function getposts(){
    setTimeout(()=>{
        let output='';
        posts.forEach(post.index)=>{
            output += `<li>${post.title}</li>`;
        }
        document.body.innerHTML=output;
    },1000);
}

function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.post(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong');
            }

        },2000)
    })
}

function deletepost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(posts.length>0){
                const lastElement=posts.pop();
                resolve(lastElement);
            }
            else{
                reject('Array is empty now')
            }
        },1000)
    });
}


createpost({title:'post three',body:'This is post three'}).then(()=>{
    getposts()
    deletepost().then((=>{
        getposts();
    deletepost().then(()=>{
        getposts()
    deletepost().then(()=>{
        getposts();
    deletepost().then(()=>{
        getposts()
      })
        })
     })
       
    }))
}).catch(err=>console.log(err))
