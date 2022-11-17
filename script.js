(() => {
  const listElems = document.querySelectorAll(".list-elem");
  //   for (let index = 0; index < listElems.length; index++) {
  //     const element = listElems[index];
  //     element.addEventListener("click", (e) => {
  //       console.log(element.innerHTML);
  //     });
  //   }
  listElems.forEach((listElem) => {
    listElem.addEventListener("click", (e) => {
      alert("Zakładka " + listElem.innerHTML + " nie działa");
    });
  });
})();
