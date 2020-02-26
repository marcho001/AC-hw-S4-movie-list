let movies = [{
  title: 'The Avengers',
  image: 'https://bit.ly/2NQOG6H',
  rating: 0
},
{
  title: 'Our Times',
  image: 'https://bit.ly/2OsGmv2',
  rating: 0
},
{
  title: 'Aquaman',
  image: 'https://bit.ly/2zmcLxo',
  rating: 0
}]

// select element from html template

const dataPanel = document.querySelector('#data-panel')
let htmlContent = ''
function content() {

  htmlContent += `
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    `
  movies.forEach((data) => {
    htmlContent += `
        <tr>
          <td>
            <img src = ${data.image} width = "70" class="img-thumbnail" >
          </td>
          <td>${data.title}</td>
          <td>
            <span class="fa fa-thumbs-up"></span>
            <span class="fa fa-thumbs-down px-2"></span>
            <span>${data.rating}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-danger">X</button>
          </td>
        </tr>
      `
  })

  htmlContent += `
      </tbody>
    </table>
  `
}
content()
dataPanel.innerHTML = htmlContent


//改變html rating內容

// dataPanel.addEventListener('click',function(e){

//   let rating = e.target.parentElement.lastElementChild



//   if(e.target.classList.contains('fa-thumbs-up')){

//     let newNum = Number(rating.innerText) + 1

//     rating.innerText = newNum

//   } else if(e.target.classList.contains('fa-thumbs-down')){

//      let newNum = Number(rating.innerText) - 1

//      rating.innerText = newNum
//     
//   }

//   if (e.target.tagName === 'BUTTON') {
//     let del = e.target.parentElement.parentElement
//     del.remove()
//     e.stopPropagation()
//   }

// },false)




// 改變movies 內容

dataPanel.addEventListener('click', function (e) {

  if (e.target.classList.contains('fa-thumbs-up')) {

    rate(e.target, 'fa-thumbs-up')

  } else if (e.target.classList.contains('fa-thumbs-down')) {

    rate(e.target, '')

  }

  if (e.target.tagName === 'BUTTON') {

    let del = e.target.parentElement.parentElement

    del.remove()

    e.stopPropagation()

  }

}, false)



function rate(z, y) {

  let title = z.parentElement.previousElementSibling

  let position = movies.findIndex(x => x.title === title.innerText)

  let rating = z.parentElement.lastElementChild

  if (y === 'fa-thumbs-up') {

    movies[position].rating++

  } else {

    movies[position].rating--

  }

  rating.innerText = movies[position].rating
}


