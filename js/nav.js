let nav=document.querySelector("nav")
nav.addEventListener("click",function(e){
    e.preventDefault()
    console.log(window.location.href, e.target.href,e.target.href!==window.location.href)
    if(e.target.tagName=='A'&&e.target.href!==window.location.href){
        let body=document.querySelectorAll("body")[0]
        body.classList.add('right')
        setTimeout(()=>{
            window.location.href=e.target.href
        },150)
    }
})