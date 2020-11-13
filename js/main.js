/*
1. Susirandame visus mygtukus
2. einame per kiekviena
    2.b kiekvienam uzdeda, jog stebetu kada bus paspaustas
    2.c paspaudimo metu atliekame kazkokia funkcionaluma
*/

const selector = '.calculator .btn';
const btnDOM = document.querySelectorAll(selector);

for (let btn of btnDOM) {
    btn.addEventListener('click', () => {
        const kas = btn.innerText;
        console.log(kas);
    });
}

/*
Mintys:
- papasakoti apie arrow functions
- perrasyti koda ant Class()
*/