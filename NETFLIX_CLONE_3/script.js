console.log("NETFLIX CLONE");

let FAQbox = document.getElementsByClassName("FAQbox")[0];
FAQbox.onclick = () => {
    let FAQbox1 = document.getElementsByClassName("FAQbox")[0];
    FAQbox1.innerHTML = " Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\n You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!  "
}

let FAQbox2 = document.getElementsByClassName("FAQbox")[1];
FAQbox2.onclick = () => {
    let FAQbox3 = document.getElementsByClassName("FAQbox")[1];
    FAQbox3.innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
}

let FAQbox4 = document.getElementsByClassName("FAQbox")[2];
FAQbox4.onclick = () => {
    let FAQbox5 = document.getElementsByClassName("FAQbox")[2];
    FAQbox5.innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
}

let FAQbox6 = document.getElementsByClassName("FAQbox")[3];
FAQbox6.onclick = () => {
    let FAQbox7 = document.getElementsByClassName("FAQbox")[3];
    FAQbox7.innerHTML = " Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. "
}

const FAQs = document.querySelectorAll("#ans")

FAQs.forEach(ans => {
    ans.addEventListener("click", ()=> {
        ans.classList.toggle("active");
    });
});
