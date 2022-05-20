
main.remove();
const newHeader = document.createElement('h1');

newHeader.id = 'victory'
newHeader.textContent = "YOUR-NAME is the champion!"

document.body.append(newHeader)

// Write your code here!



const ul = document.createElement("ul")
document.body.append(ol)

for (let i = 0; i < 101; i++){
    const li = document.createElement("li");
    li.textContent = (i + 1).toString()
    ul.append(li)
}