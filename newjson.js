var cart = {}


$('document').ready(function () {

    loadgoods()
    checkcart()
    // displayStyles(styles) //display style options



});
var general = []
var styles = []
//var matches=[]




function loadgoods() {


    $.getJSON('data.json', function (data) {


        //console.log(Object.keys(data).length)
        for (var key in data) {
            general.push(data[key])
        }
        //console.log(general[200])




        function filterdetailstyles() {

            document.querySelectorAll('#detailfilterbtn').forEach(el => {  //event listener for redesign button 
                el.addEventListener("click", detailfilter)

                function detailfilter(e) {

                    console.log("find")

                    //console.log(e.target)



                    var searchtextfilter = el.dataset.search.toLowerCase()
                    var matchedstyles = styles.filter((key) => {

                        return (key.searchname.toLowerCase().trim().includes(searchtextfilter))


                    })




                    const display = (matchedstyles) => { //display filtered style green icon for the model
                        document.getElementById("general1").innerHTML = `
                    ${matchedstyles.map(function (search) {



                            return `<div class="cellforicon" data-search=${search.searchname} >
                        <img data-price=${search.price} class="detail img imgforicon "  src="${search.photo}"   >
                        
                        
                       
                        <p id="styleindicator">${search.name}</p>
                        
                        
                        
                       
                       
                        
                
                        
                    </div>`
                        }).join("")

                            }`

                    }
                    display(matchedstyles)
                    addlistenertocellforicon()
                }

            }
            )

        }

        filterdetailstyles()



















        function addlistenertocellforicon() {

            document.querySelectorAll('.cellforicon').forEach(el => {  //event listener for each style green icon
                el.addEventListener("click", srchfilter)

                function srchfilter(e) {

                    // console.log(general)

                    //console.log(e.target)
                    var cell = e.target.parentElement
                    var styleindicator = cell.querySelectorAll('#styleindicator')[0].innerHTML
                    var searchtext = document.getElementById('searchbar')
                    //searchtext.innerHTML = "Details: " + styleindicator
                    var searchtextfilter = el.dataset.search.toLowerCase()
                    var matches = general.filter((key) => {

                        return (key.name.toLowerCase().trim().includes(searchtextfilter))


                    })
                    // console.log(matches.length)

                    display(matches)



                }

            }
            )


        }




        const display = (general) => { //display silver  details     by styles

            document.getElementById("general1").innerHTML = `
        ${general.map(function (search) {



                return `<div class="cell" data-art=${search.id}  >
            <img data-price=${search.price} class="detail img "   src="${search.photo}"   >
            
            
            
           
            <p class="genarray" id="mat-ind"  >${search.material}</p>
            <p class="genarray" >${Math.round((search.weight * 2500 * search.plating) * 100) / 100} դր.</p>
           
            <p  class="addtodesignBtn ">Ավելացնել կտավին</p>
            
    
            
        </div>`
            }).join("")

                }`
            addtocart()
            translate()
        }
        var reversedGeneral = general.reverse()
        //display(reversedGeneral)
        console.log(reversedGeneral.length)






    })




}






//filter  for search


var search = document.getElementById('search')



//console.log(general)


function addtocart() {  //addtocart , second part is in cart js
    document.querySelectorAll('.cell').forEach(el => {
        el.addEventListener("click", addimg)

        function addimg(e) {
            var articul = el.dataset.art
            cart[articul] = 1
            //console.log(e.target)
            var cell = e.target.parentElement
            var button = cell.querySelectorAll('.addtodesignBtn')[0]

            e.target.parentElement.classList.add('cellclicked')
            button.innerHTML = "Ավելացված է"
            button.classList.add('addtodesignBtnclicked')

            localStorage.setItem('cart', JSON.stringify(cart))

            // console.log(cart)
        }

    })

}





function checkcart() {

    if (localStorage.getItem('cart') != null) {

        cart = JSON.parse(localStorage.getItem('cart'))

    }

}



































