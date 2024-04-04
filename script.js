let q1_title = document.getElementById('page-2-title');
let q2_title = document.getElementById('page-3-title');
let q3_title = document.getElementById('page-4-title');
let q4_title = document.getElementById('page-5-title');
let q5_title = document.getElementById('page-6-title');
let q6_title = document.getElementById('page-7-title')

if(q1_title != null){
    let q1_yes = document.getElementById('page-2-button-yes');
    q1_yes.addEventListener("click", function() {
        localStorage.setItem("q1", "your professor has assigned a minimum amount of deliverables")
    })
    let q1_no= document.getElementById('page-2-button-no');
    q1_no.addEventListener("click", function() {
        localStorage.setItem("q1", "your professor has not assigned a minimum amount of deliverables")
    })

}


if(q2_title != null){
    let q2_response = document.getElementById('input-1')
    let q2_next = document.getElementById('submit-1');
    q2_next.addEventListener("click", function() {
        localStorage.setItem("q2", "you were assigned " + q2_response.elements[0].value + " deliverables")
    })
}


if(q3_title != null){
    let q3_1 = document.getElementById('del-count-1');
    q3_1.addEventListener("click", function() {
        localStorage.setItem("q3", "you want to produce less than 10 deliverables(so you want to fail?)")
    })
    let q3_2= document.getElementById('del-count-2');
    q3_2.addEventListener("click", function() {
        localStorage.setItem("q3", "you want to produce 10-15 deliverables(you should make more)")
    })
    let q3_3= document.getElementById('del-count-3');
    q3_3.addEventListener("click", function() {
        localStorage.setItem("q3", "you want to produce more than 15 (perfect)")
    })
}


if(q4_title != null){
    let q4_1 = document.getElementById('del-type-1');
    q4_1.addEventListener("click", function() {
        localStorage.setItem("q4", "you want to make more physical deliverables")
    })
    let q4_2= document.getElementById('del-type-2');
    q4_2.addEventListener("click", function() {
        localStorage.setItem("q4", " you want to make a roughly equal amount of both physical and digital deliverables (this is good)")
    })
    let q4_3= document.getElementById('del-type-3');
    q4_3.addEventListener("click", function() {
        localStorage.setItem("q4", "more digital (wrong... remember you go to parsons!!!)")
    })
}


if(q5_title != null){
    let q5_1 = document.getElementById('page-6-button-1');
    q5_1.addEventListener("click", function() {
        localStorage.setItem("q5", "of course you are making more deliverables than assigned")
    })
    let q5_2= document.getElementById('page-6-button-2');
    q5_2.addEventListener("click", function() {
        localStorage.setItem("q5", "of course you are making more deliverables than assigned")
    })
    let q5_3= document.getElementById('page-6-button-3');
    q5_3.addEventListener("click", function() {
        localStorage.setItem("q5", "of course you are making more deliverables than assigned")
    })
}


if(q6_title != null){
    let q6_1 = document.getElementById('sleep-1');
    q6_1.addEventListener("click", function() {
        localStorage.setItem("q6", "you want less than 6 hours of sleep (accurate)")
    })
    let q6_2= document.getElementById('sleep-2');
    q6_2.addEventListener("click", function() {
        localStorage.setItem("q6", "you want 6-8 hours of sleep (lucky)")
    })
    let q6_3= document.getElementById('sleep-3');
    q6_3.addEventListener("click", function() {
        localStorage.setItem("q6", "you want more than 8 hours of sleep (yea ok sure)")
    })
}


let deliverables = document.getElementById("deliverables");

if (deliverables != null ){
  //  deliverables.innerHTML = localStorage.getItem("q1")

    let newDeliverable1 = document.createElement("li"); //<li></li>
    let newDeliverable2 = document.createElement("li");
    let newDeliverable3 = document.createElement("li");
    let newDeliverable4 = document.createElement("li");
    let newDeliverable5 = document.createElement("li");
    let newDeliverable6 = document.createElement("li");

    newDeliverable1.innerHTML =localStorage.getItem("q1") // <li>no</li>
    newDeliverable2.innerHTML =localStorage.getItem("q2")
    newDeliverable3.innerHTML =localStorage.getItem("q3")
    newDeliverable4.innerHTML =localStorage.getItem("q4")
    newDeliverable5.innerHTML =localStorage.getItem("q5")
    newDeliverable6.innerHTML =localStorage.getItem("q6")

    deliverables.appendChild(newDeliverable1)
    deliverables.appendChild(newDeliverable2)
    deliverables.appendChild(newDeliverable3)
    deliverables.appendChild(newDeliverable4)
    deliverables.appendChild(newDeliverable5)
    deliverables.appendChild(newDeliverable6)
}




// let q1_yes = document.getElementById('page-2-button-yes');
// if(q1_yes != null){
//     q1.addEventListener("click", function() {
//         localStorage.setItem("q1", "yes")
//     })
// }


// let q1_no = document.getElementById('page-2-button-yes');
// if(q1_no != null){
//     q1.addEventListener("click", function() {
//         localStorage.setItem("q1", "yes")
//     })
// }


// let answers = "one"
// let answers = ["one"]

// let res1 = document.getElementById("page-2-button-yes")

// res1.addEventListener("click", function(){
//     answers.push("yes")
// })

// console.log(answers)

// //create new <li> (list item)
//     let answer1 = document.createElement("li")
//     let answer2 = document.createElement("li")
//     let answer3 = document.createElement("li")
//     let answer4 = document.createElement("li")
//     let answer5 = document.createElement("li")
//     let answer6 = document.createElement("li")

//     //put items inside <li></li>


    
//     answer1.innerHTML = answers[0] // sets the content of the first "li" (created above) to the content first cell of the array "answers"
//     list.appendChild(answer1);



//     answer2.innerHTML = answers[1]
//     list.appendChild(answer2);



//     answer3.innerHTML = answers[2]
//     list.appendChild(answer3);



//     answer4.innerHTML = answers[3]
//     list.appendChild(answer4);




//     answer5.innerHTML = answers[4]
//     list.appendChild(answer5);




//     answer6.innerHTML = answers[5]
//     list.appendChild(answer6);

// // let answers  = ["yes", "no"]

// // let answer1 = document.createElement("li")

// // let item1 = document.getElementById("page-2-yes"); 

// // answer1.addEventListener("click", function() {
// //     answers.append("deliverables assigned")
// // })


// // console.log("the whole array:", answers)
// // console.log("cell 1:", answers[0])


