
const listJobs  = document.getElementById("list-jobs")
const listCards = document.getElementById("list-cards")

function renderPosts(arr){

    listJobs.innerHTML = ""

    arr.forEach((element, index) => {

        const id            = index
        const title         = element.title
        const enterprise    = element.enterprise
        const location      = element.location
        const description   = element.description
        const modalities    = element.modalities

        const tagLi     = document.createElement("li")
        const tagH4     = document.createElement("h4")
        const tagDiv1   = document.createElement("div")
        const tagP1     = document.createElement("p")
        const tagP2     = document.createElement("p")
        const tagP3     = document.createElement("p")
        const tagDiv2   = document.createElement("li")
        const tagP4     = document.createElement("p")
        const tagButton = document.createElement("button")

        tagLi.classList     = "w-full flex flex-col gap bg-white p-2 rounded-sm"
        tagH4.classList     = "title-4"
        tagDiv1.classList   = "flex justify-start gap-2"
        tagP1.classList     = "text-3 text-grey-2"
        tagP2.classList     = "text-3 text-grey-2"
        tagP3.classList     = "text-2 text-grey-2"
        tagDiv2.classList   = "flex justify-between items-center"
        tagP4.classList     = "text-3 text-grey-2 bg-grey-3 p rounded-sm"
        tagButton.classList = "button-default-2 text-2"

        tagH4.innerText     = title
        tagP1.innerText     = enterprise
        tagP2.innerText     = location
        tagP3.innerText     = description
        tagP4.innerText     = modalities[0]
        tagButton.innerText = "Candidatar"

        tagButton.id = id

        tagButton.addEventListener("click", event => {
            
            event.preventDefault()
            const idButton = Number(event.target.id)
        
            // listCards.innerHTML = ""

            arr.forEach(e => {

                if (idButton == e.id){
                   
                    renderCard(e)
                }
            })

        })

        tagDiv2.append(tagP4, tagButton)
        tagDiv1.append(tagP1, tagP2)
        tagLi.append(tagH4, tagDiv1, tagP3, tagDiv2, )


        listJobs.appendChild(tagLi)
    });
}

function renderCard(element){
   
     
        const title         = element.title
        const enterprise    = element.enterprise
        const location      = element.location

        const tagLi     = document.createElement("li")
        const tagDiv1   = document.createElement("div")
        const tagH5     = document.createElement("h5")
        const tagButton = document.createElement("button")
        const tagDiv2   = document.createElement("div")
        const tagP1     = document.createElement("p")
        const tagP2     = document.createElement("p")

        tagLi.classList     = "card w-full flex flex-col gap bg-white p-2 rounded-sm"
        tagDiv1.classList   = "flex justify-between"
        tagH5.classList     = "title-5 w-80"
        tagButton.classList = "trash w-20"
        tagDiv2.classList   = "flex justify-start gap-2"
        tagP1.classList     = "text-3 text-grey-2"
        tagP2.classList     = "text-3 text-grey-2"

        tagH5.innerText     = title
        tagP1.innerText     = enterprise
        tagP2.innerText     = location

        tagDiv2.append(tagP1, tagP2)
        tagDiv1.append(tagH5, tagButton)
        tagLi.append(tagDiv1, tagDiv2)

        tagButton.addEventListener("click", e => {

            let button = e.target

            if (button.tagName == "BUTTON") {
            let li = button.closest("li");
        
            li.remove();
           
          }
        })

        listCards.append(tagLi)
}

renderPosts(jobsData)

{/* <li class="card w-full flex flex-col gap bg-white p-2 rounded-sm">
<div class="flex justify-between">
  <h5 class="title-5 w-80">Pessoa desenvolvedora front-end - React JS</h5>
  <button class="trash w-20"></button>
</div>
<div class="flex justify-start gap-2">
  <p class="text-3 text-grey-2">Kenzie Academy</p>
  <p class="text-3 text-grey-2">Curitiba</p>
</div>
</li> */}
