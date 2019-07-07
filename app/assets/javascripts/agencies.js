$(() =>{
handleClick()

})

const handleClick = () => {
$('.agencies').on('click', (e) =>{
    e.preventDefault()
    fetch('/travel_agencies.json')
    .then(r => r.json())
    .then(resp => {

        $('#app-container').html('')
        resp.forEach((agency) => {
            let newAgency = new Agency(agency)
            let agencyHtml = newAgency.formatIndex()
            $('#app-container').append(agencyHtml)
        })
    })  

})

}

function Agency(agency) {
    this.id = agency.id
    this.name = agency.name 
    this.getaways = agency.getaways
}

Agency.prototype.formatIndex = function(){
    let agencyHtml = `
    <h1>${this.name}</h1>
    `
    return agencyHtml
}