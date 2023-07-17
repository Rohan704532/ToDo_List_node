/*const input = document.querySelector(".input");
const btna = document.querySelector(".Add");
const btnp = document.querySelector(".Pri");
const btnd = document.querySelector(".Del")
const ul = document.querySelector(".ul");
const ulc = document.querySelector(".ulc")

btna.addEventListener('click', ()=>{
    let res = document.querySelector("input").value;
    const li = document.createElement("li");
    const div = document.createElement("div");
    li.innerHTML = res;
    const btn1 = document.createElement("button")
    btn1.innerHTML = "Completed"
    const btn2 = document.createElement("button")
    btn2.innerHTML = "Delete"
    div.classList.add(`divin`)
    div.setAttribute('id','divid')
    btn1.classList.add(`btnd`)
    btn2.classList.add(`btnd`)
    div.appendChild(li);
    div.appendChild(btn1);
    div.appendChild(btn2);
    ulc.appendChild(div);
    btn2.addEventListener('click',()=>{
        ulc.remove(div);
    })
    btn1.addEventListener('click',()=>{
        document.getElementById('divid').style.opacity = 0.3;
    })
});

btnp.addEventListener('click',()=>{
    let res = document.querySelector("input").value;
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.innerHTML = res;
    const btn1 = document.createElement("button")
    btn1.innerHTML = "Completed"
    let btn2 = document.createElement("button")
    btn2.innerHTML = "Delete"
    div.classList.add(`divin`)
    div.setAttribute('id','divid')
    btn1.classList.add(`btnd`)
    btn2.classList.add(`btnd`)
    div.prepend(btn2);
    div.prepend(btn1);
    div.prepend(li);
    ulc.prepend(div);
    btn2.addEventListener('click',()=>{
        ulc.remove(div);
    })
    btn1.addEventListener('click',()=>{
        document.getElementById('divid').style.opacity = 0.3
    })
});

btnd.addEventListener("click",()=>{
    ulc.remove();
});
 */


/* let nodelist = document.getElementsByTagName("LI")
let i;
for(i=0;i<nodelist.length;i++){
    let btn2 = document.createElement("button")
    btn2.innerHTML = "Delete"
    btn2.className="Delete";
    nodelist[i].appendChild(btn2);
}*/
window.onload = (event) => {

    fetch("https://rohan704532-todo-list-node.onrender.com/get",{
        method:"GET"
    }).then((resp)=>{
        resp.json().then((data)=>{
            for(let i=0;i<data.todos.length;i++){
                let li = document.createElement("li")
                li.className = "Li"
                let t = document.createTextNode(data.todos[i].title);
                li.appendChild(t);
                document.getElementById("ul").appendChild(li)
                let span = document.createElement("SPAN")
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Delete"
        btn2.className = "Delete";
        span.appendChild(btn2);
        li.appendChild(span)

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Completed"
        btn1.className = "Completed";
        span.appendChild(btn1);
        li.appendChild(span)

        btn2.onclick = function () {
            let div = li.innerHTML
            const index = div.indexOf("<")
            const word = div.substring(0,index)
            //div.style.display = "none"
            //let classLi = document.getElementsByClassName('li')
            //console.log(word)

            fetch("https://rohan704532-todo-list-node.onrender.com/deleteId",{
                method:"DELETE",
                body:JSON.stringify({
                    title:word
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((resp)=>{
                resp.json().then((data)=>{
                    console.log(data)
                })
            })
            location.reload();
        }

        btn1.onclick = function () {
            let div = li
            div.style.opacity = 0.3
        }
            }
        })
    })
    
    
    //console.log("page is fully loaded");
};

function newTask() {
        let inputValue = document.getElementById("name").value;
        fetch("https://rohan704532-todo-list-node.onrender.com/add",{
            method:"POST",
            body:JSON.stringify({
                title:inputValue
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((resp)=>{
            console.log(resp)
        })


        location.reload();
        let li = document.createElement("li")
        li.className = "Li"
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === " ") {
            alert("Please write something");
        } else {
            document.getElementById("ul").appendChild(li)
        }
        document.getElementById("name").value = ""

        let span = document.createElement("SPAN")
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Delete"
        btn2.className = "Delete";
        span.appendChild(btn2);
        li.appendChild(span)

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Completed"
        btn1.className = "Completed";
        span.appendChild(btn1);
        li.appendChild(span)

        btn2.onclick = function () {
            let div = li.innerHTML
            const index = div.indexOf("<")
            const word = div.substring(0,index)
            //div.style.display = "none"
            //let classLi = document.getElementsByClassName('li')
            //console.log(word)

            fetch("https://rohan704532-todo-list-node.onrender.com/deleteId",{
                method:"DELETE",
                body:JSON.stringify({
                    title:word
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((resp)=>{
                resp.json().then((data)=>{
                    console.log(data)
                })
            })
            location.reload();
        }

        btn1.onclick = function () {
            let div = li
            div.style.opacity = 0.3
        }
    }

    function Delete() {
        fetch("https://rohan704532-todo-list-node.onrender.com/deleteAll",{
            method:"DELETE"
        }).then((resp)=>{
            resp.json().then((data)=>{
                //console.log(data)
            })
        })
        location.reload()
        //let li = document.getElementById("ul")
        //li.remove()
    }
    function Priority() {
        let inputValuep = document.getElementById("name").value;
        fetch("http://localhost:3000/add",{
            method:"POST",
            body:JSON.stringify({
                title:inputValuep
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((resp)=>{
            resp.json().then((data)=>{
                //console.log(data)
            })
        })
        let li = document.createElement("li")
        let inputValue = document.getElementById("name").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === " ") {
            alert("Please write something");
        } else {
            document.getElementById("ul").prepend(li)
        }
        document.getElementById("name").value = ""

        let span = document.createElement("SPAN")
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Delete"
        btn2.className = "Delete";
        span.appendChild(btn2);
        li.appendChild(span)

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Completed"
        btn1.className = "Completed";
        span.appendChild(btn1);
        li.appendChild(span)

        btn2.onclick = function () {
            let div = li.innerHTML
            const index = div.indexOf("<")
            const word = div.substring(0,index)
            //div.style.display = "none"
            //let classLi = document.getElementsByClassName('li')
            //console.log(word)

            fetch("https://rohan704532-todo-list-node.onrender.com/deleteId",{
                method:"DELETE",
                body:JSON.stringify({
                    title:word
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((resp)=>{
                resp.json().then((data)=>{
                    console.log(data)
                })
            })
            location.reload();
        }

        btn1.onclick = function () {
            let div = li
            div.style.opacity = 0.3
        }
    }
