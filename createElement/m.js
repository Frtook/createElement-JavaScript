window.onload = () => {
  document.forms[0].onsubmit = (e) => {
    let result = document.querySelector(".results");
    e.preventDefault();
    result.innerHTML = "";
    let numElement = +document.querySelector('[name="elements"]').value;
    for (let i = 0; i < numElement; i++) {
      let text = document.querySelector("[name='texts']").value;
      let optionIndex = document.querySelector("select").selectedIndex;
      if (optionIndex === 0) {
        let myElement = document.createElement("div");
        myElement.innerHTML = text;
        result.appendChild(myElement);
      } else {
        let myElement = document.createElement("section");
        myElement.innerHTML = text;
        result.appendChild(myElement);
      }
    }
  };
};
