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
let htmlContent = `
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

dataPanel.innerHTML = htmlContent