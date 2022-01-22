//=============================================================================
// Hamburger Button
//=============================================================================

const linksBtn = document.querySelector("#links")
const links = document.querySelector(".header-links")

linksBtn.addEventListener("click", () => {
  links.classList.toggle("active")
})

//=============================================================================
// Crypto Chart
//=============================================================================
const container = document.querySelector(".chart-container")
// Adds 5 rows of data from the API (top 5 crypto)
const createRow = (data, i) => {
  const mainDiv = document.createElement("div")
  mainDiv.classList.add("chart-crypto", "chart")
  const nameDiv = document.createElement("div")
  nameDiv.classList.add("crypto-name-chart", "chart")
  const number = document.createElement("p")
  const name = document.createElement("p")
  const price = document.createElement("p")
  const percent = document.createElement("p")
  const img = document.createElement("img")

  container.appendChild(mainDiv)
  mainDiv.appendChild(number)
  number.innerHTML = i + 1
  mainDiv.appendChild(nameDiv)
  nameDiv.appendChild(img)
  img.src = data[i].image
  nameDiv.appendChild(name)
  name.innerHTML = data[i].name
  mainDiv.appendChild(price)
  price.innerHTML = `$${data[i].current_price
    .toFixed(2)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
  mainDiv.appendChild(percent)
  percent.innerHTML = `${data[i].price_change_percentage_24h.toFixed(2)}%`

  // Changes color of percentage
  percent.innerHTML > 0
    ? (percent.style.color = "green")
    : (percent.style.color = "red")

  const rowData = [`$${data[i].market_cap}`, `$${data[i].total_volume}`]

  rowData.forEach((data) => {
    const p = document.createElement("p")
    p.classList.add("hide")
    p.innerHTML = data
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    mainDiv.appendChild(p)
  })
}

// Fetches data from coin gecko api
//-----------------------------------------------------------------------------
const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`

const api2 = `https://api.coingecko.com/api/v3/search/trending`

fetch(api)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      createRow(data, i)
    }
  })

//=============================================================================
//  Crypto Exchange
//=============================================================================

/*----------------------------------------------------------------





*/
