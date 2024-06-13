const sliceLInk = document.getElementById('sliceLInk')
const slicLink = document.getElementById('getLink')
const displayLink = document.getElementById("displayLink")
const download = document.getElementById("download")
let fileExtension = ""
const nameFile = document.getElementById("name")
const clearLink = document.getElementById('clear')
const img = document.getElementById('image')
const paste = document.getElementById('paste')

function getLinkFormat(){
    const splitLInk = slicLink.value.split("/")
    splitLInk.splice(5,1,"")

    const joinLInk = splitLInk.join("/")

    displayLink.textContent = joinLInk

    navigator.clipboard.writeText(displayLink.textContent)

    img.src = displayLink.textContent
    

    const file = splitLInk[splitLInk.length - 1].split(".")[1].split("?")[0]
    fileExtension = file

    img.alt = nameFile.value

    if(!fileExtension){
        alert("Enter File Name")
    }
}

sliceLInk.addEventListener('click',()=>{
    getLinkFormat()
})

download.addEventListener('click',()=>{
    getLinkFormat()

    fetch(displayLink.textContent,{
        // mode : 'no-cors'
    })
        .then(response => response.blob())
        .then(blob => {
          // Create a link element
          console.log(blob)
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = (nameFile.value+'.'+fileExtension).trim();

          // Append the link to the body
        //   document.body.appendChild(link);

          // Programmatically click the link to trigger the download
          link.click();

          // Remove the link from the document
        //   document.body.removeChild(link);
    })

})

slicLink.addEventListener("change",(e)=>{
    displayLink.textContent = ""
    fileExtension = ""

    if(e.target.value){
        getLinkFormat()
    }
})

clearLink.addEventListener("click",()=>{
    slicLink.value = ""
    displayLink.textContent = ""
    fileExtension = ""
    img.src = ''
    img.alt = ''
})

paste.addEventListener('click',()=>{
    navigator.clipboard.readText().then(text =>{
        console.log("text",text)
        document.getElementById('getLink').value = text
    })
    
})


const inputLink1 = document.getElementById('inputLink1')
const inputLink2 = document.getElementById('inputLink2')
const inputLink3 = document.getElementById('inputLink3')
const inputLink4 = document.getElementById('inputLink4')
const inputLink5 = document.getElementById('inputLink5')
const inputLink6 = document.getElementById('inputLink6')

const image1 = document.getElementById('image1')
const image2 = document.getElementById("image2")
const image3 = document.getElementById('image3')
const image4 = document.getElementById('image4')
const image5 = document.getElementById('image5')
const image6 = document.getElementById('image6')

const get  = document.getElementById('get')
const clearAll = document.getElementById('clearAll')

function getLinkFormat(input,image){
    const splitLInk = input.value.split("/")
    splitLInk.splice(5,1,"")
    const joinLInk = splitLInk.join("/")
    image.src = joinLInk
}

get.addEventListener('click',()=>{
    getLinkFormat(inputLink1,image1)
    getLinkFormat(inputLink2,image2)
    getLinkFormat(inputLink3,image3)
    getLinkFormat(inputLink4,image4)
    getLinkFormat(inputLink5,image5)
    getLinkFormat(inputLink6,image6)
})

clearAll.addEventListener('click',()=>{
    inputLink1.value = ""
    inputLink2.value = ""
    inputLink3.value = ""
    inputLink4.value = ""
    inputLink5.value = ""
    inputLink6.value = ""
    image1.src = ""
    image2.src = ""
    image3.src = ""
    image4.src = ""
    image5.src = ""
    image6.src = ""
})



