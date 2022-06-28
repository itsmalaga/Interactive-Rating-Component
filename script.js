let submitBtn = document.getElementById("submit-button");
let ratingCntnr = document.getElementById("rating-container");
let thankYouCntnr = document.getElementById("thank-you-container");
let ratingInfo = document.getElementById("rating-announcement");
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let r5 = document.getElementById('r5');
let activeRating = document.activeElement;
let number = '';

r1.addEventListener('click', function() {
    number = r1.innerHTML;
})
r2.addEventListener('click', function() {
    number = r2.innerHTML;
})
r3.addEventListener('click', function() {
    number = r3.innerHTML;
})
r4.addEventListener('click', function() {
    number = r4.innerHTML;
})
r5.addEventListener('click', function() {
    number = r5.innerHTML;
})

submitBtn.addEventListener('click', function() {
    ratingCntnr.style.display = 'none';
    thankYouCntnr.style.display = 'flex';
    if (number == '') {
        document.getElementById('rating-result').innerHTML='<p style="color:red">You have to select a rating... Please try again :)</p>';
    } else {
        ratingInfo.innerHTML = number;
    }
    
})
console.log("Hello");