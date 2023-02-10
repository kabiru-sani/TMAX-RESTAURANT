
const menus = [
    {
        name: 'Rice',
        price: 2000
    },
    {
        name: 'Beans',
        price: 1000
    },
    {
        name: 'Amala',
        price: 2500
    },
    {
        name: 'Fufu',
        price: 2400
    },
    {
        name: 'Spaghetti',
        price: 1500
    },
    {
        name: 'Plantain',
        price: 1000
    }
]

// to store menu in local storage
localStorage.setItem("menu", JSON.stringify(menus));

// to retreive menus from local storage
const fmenu = JSON.parse(localStorage.getItem("menus"));


// to display the array of menus on the menu page
const menuList = document.getElementById('menu-list')

let menu = ""
for (let i = 0; i<fmenu.length; i++){
    menu += (
        `
        <div class="col-lg-6 foods">
        <div class="d-flex h-100">
            <div class="flex-shrink-0">
                <img class="img-fluid" src="images/food-1.jpg" alt="" style="width: 150px; height: 85px;">
                <h4 class="bg-dark text-primary p-2 m-0">₦ ${fmenu[i].price}</h4>
            </div>
            <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                <h5 class="text-uppercase">${fmenu[i].name}</h5>
                <span>Enjoy the taste that will make you ask for more</span>
            </div>
        </div>
    </div>
    `
    )
    menuList.innerHTML = menu
}

const customerOrder = document.getElementById('food-name')
const quantity = document.getElementById('food-qty')

var amount;

// function to take customer order
function takeOrder(){

    let f = customerOrder.value
    let q = quantity.value
    
    for(let i = 0; i<fmenu.length; i++ ){
        
        if(fmenu[i].name.toLowerCase() === f.toLowerCase()){
        amount = fmenu[i].price * q
        Swal.fire(
            'Order Successful!',
            `Thank you for your order of ${q} plates of ${f}, Your Bill is ₦ ${amount}, Kindly proceed to make payment.`,
            'success'
          ).then(function() { 
            window.location = "payment.html?amount=" + amount;
        });
        break
        }else if(f === ""){
            Swal.fire(
                'Sorry!',
                'Please Specify what you want to order',
                'info'
                )
            break
        }
                
    }
    
}

// finction to make payment
function orderPayment(){
    
    //var amt = amount
     var tableNumber = Math.floor(Math.random() * 50) + 1;
    
     Swal.fire(
        'Payment Successful!',
        `Your Payment is Successful. You have been assigned to table number ${tableNumber}. Enjoy your meal.`,
        'success'
        ).then(function() { 
            window.location = "index.html";
        });

}

// windows scroll 
function myFunction() {
    if ($(this).scrollTop() > 40) {
        $('.navbar').addClass('sticky-top');
    } else {
        $('.navbar').removeClass('sticky-top');
    }
};

window.onscroll = function() {myFunction()};

