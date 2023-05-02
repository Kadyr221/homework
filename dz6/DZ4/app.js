const box = document.querySelector(".wrapper");

const postData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
const getData = () => {
  postData("data.json", {}).then((data) => { 

          Object.values(data.obj).forEach((items) =>{
            items.forEach((item)=>{
                const element = document.createElement("div");
                element.classList.add("element");

                const img = document.createElement("img");
                img.src = item.img;
                img.alt = item.name;
                element.append(img);

                const name = document.createElement("h3");
                name.textContent = item.name;
                element.append(name);

                const price = document.createElement("span");
                price.textContent = item.price;
                element.append(price);

                const description = document.createElement("p");
                description.textContent = item.description;
                element.append(description);
                
                const button = document.createElement("button")
                button.innerHTML = "Купить";
                element.append(button);
                box.append(element);
            })
        })
    });
}
getData();