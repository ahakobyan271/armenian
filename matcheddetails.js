var readytowear = [
    {
        name: "Sunrise. Նախատեսված է 1 ականջի համար",
        searchname: "argishti",
        code: "argishti",
        photo: "imagegold/argishti.png",
        price: "9500",
        material: "Մետաղը՝ արծաթ",
        gif: "imagegold/tutor2.gif"

    }


]


const showready = (readytowear) => {   //display ready to wear model model

    document.getElementById("readyToWearSect").innerHTML = `
     ${readytowear.map(function (search) {

        return `  <div class="cellforready" data-search=${search.searchname} >

    <div class="readyimgwrapper">
         <img data-price=${search.price} class="readyToWearImg"  src="${search.photo}"   >
         <img  class="tutorGif"  src="${search.gif}"   >
    </div>
<div class="readybtnwrapper">

     <div class="alternative-wrapper">
     <a href="ready-order-checkout.html" class="calltodesign" data-itemcode=${search.code} data-photo=${search.photo} 
     data-priceready=${search.price}
     id="buyBTN">Գնել</a>
         <p class="price">${search.name}</p>
         <p class="price">${search.material}</p>
         <p class="price"  >Արժեքը՝ ${search.price} դրամ  </p>
         
        

     </div>
         <h2 class="kam">Կամ</h2>

      <div class="alternative-wrapper">

         <p class="price""> ստեղծեք ձեր տարբերակը՝ ընտրելով Մասնիկներ</p>
         <button  class="calltodesign"  id="detailfilterbtn" data-search=${search.searchname}>Մասնիկներ</button>
         <p class="price">հետո հավաքելով մոդելը Կտավի վրա և փոխելով արժեքը. </p>
         <a href="newindex.html" class="calltodesign" id="calltodesignlink">Կտավ</a>        
      </div>

 </div>   

        
         
           </div>
     
     
     `
    }).join("")

        }`

}

showready(readytowear)









var styles = [
    {
        name: "Մանեկեն",
        searchname: "mannequin ear argishti",

        photo: "image/mannequinicon.png"

    },
    {
        name: "Շղթաներ",
        searchname: "chainearcuff argishti",

        photo: "image/earcuffchain.png"

    },


    {
        name: "Hoops",
        searchname: "hoop",


        photo: "image/hoopicon.png"

    },

    {
        name: "Climber earrings",
        searchname: "climber",
        photo: "image/climbericon.png"

    },

    {
        name: "Քաֆֆեր",
        searchname: "earcuffs argishti",
        photo: "image/earcufficon.png"

    },

    {
        name: "Connectors",
        searchname: "connector",
        photo: "image/connecticon.png"

    },
    {
        name: "Drop earrings ",
        searchname: "drop",
        photo: "image/dropearringicon.png"

    },

    {
        name: "Փոքր մասնիկներ",
        searchname: "small argishti",

        photo: "image/studicon.png"

    },
    {
        name: "Medium size ",
        searchname: "medium",

        photo: "image/mediumdetailicon2.png"

    },
    {
        name: "Large size",
        searchname: "large",

        photo: "image/largedetailicon.png"

    },
    {
        name: "Rings",
        searchname: "rings",
        photo: "image/ringsicon.png"

    },

    {
        name: "Connected rings",
        searchname: "rings",
        photo: "image/doubleringicon.png"

    },

    {
        name: "Sea",
        searchname: "sea",

        photo: "image/seaicon.png"

    },
    /* {
         name: "Letters",
         searchname: "letters",
 
         photo: "image/lettericon.png"
 
     },*/

    {
        name: "Butterflies",
        searchname: "butterflies",

        photo: "image/butterflyicon.png"

    },

    {
        name: "Pearls",
        searchname: "pearls",

        photo: "image/pearlicon.png"

    },



    {
        name: "Sky",
        searchname: "sky",

        photo: "image/skyicon.png"

    },


    {
        name: "Nature",
        searchname: "nature",

        photo: "image/flowericon.png"

    },
    {
        name: "Hearts",
        searchname: "hearts",

        photo: "image/hearticon.png"

    },

    /* {
         name: "Gems",
         searchname: "gems",
 
         photo: "image/gemicon.png"
 
     },*/



    {
        name: "Zodiac",
        searchname: "zodiac",

        photo: "image/zodiac.png"

    },



    {
        name: "Ring bracelets",
        searchname: "bracelet",
        photo: "image/ringbraceleticon.png"

    },
    /*{
        name: "Helix bracelets",
        searchname: "bracelet",
        photo: "image/helixbraceleticon.png"

    },*/
    {
        name: "Bracelets",
        searchname: "bracelet",
        photo: "image/bracelets.png"

    },

    {
        name: "Necklaces",
        searchname: "necklaces",
        photo: "image/necklaceicon.png"

    }



]





function translate() {   // translate material type in browser
    var mats = document.querySelectorAll('#mat-ind')

    for (i = 0; i < mats.length; i++) {
        //console.log(mats[i].innerHTML)


        if (mats[i].innerHTML === "Gold plated 925 silver") {
            mats[i].innerHTML = "Մետաղը՝ արծաթ, ոսկեջրված "
            //console.log("hey")
        }
        else if (mats[i].innerHTML === "Mannequin") {
            mats[i].innerHTML = "Մանեկեն"
            //console.log("hey")
        }


        else {
            mats[i].innerHTML = "Մետաղը՝ արծաթ"


        }
    }
}
