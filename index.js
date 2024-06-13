const sliceLInk = document.getElementById('sliceLInk')
const slicLink = document.getElementById('getLink')
const displayLink = document.getElementById("displayLink")
const download = document.getElementById("download")
let fileExtension = ""
const nameFile = document.getElementById("name")

sliceLInk.addEventListener('click',()=>{
    const splitLInk = slicLink.value.split("/")
    splitLInk.splice(5,1,"")

    const joinLInk = splitLInk.join("/")

    displayLink.textContent = joinLInk

    navigator.clipboard.writeText(displayLink.textContent)

    const file = splitLInk[splitLInk.length - 1].split(".")[1].split("?")[0]
    fileExtension = file
})

download.addEventListener('click',()=>{
    fetch(displayLink.textContent)
        .then(response => response.blob())
        .then(blob => {
          // Create a link element
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = nameFile.value+'.'+fileExtension;

          // Append the link to the body
          document.body.appendChild(link);

          // Programmatically click the link to trigger the download
          link.click();

          // Remove the link from the document
          document.body.removeChild(link);
    })

})

slicLink.addEventListener("change",()=>{
    displayLink.textContent = ""
    fileExtension = ""
})

