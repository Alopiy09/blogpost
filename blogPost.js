document.querySelector(".article__header").textContent = "Welcome to the Jacob Sanders blog";

const allArticleHeaders = document.querySelectorAll(".article__header")

for (let index = 0; index < allArticleHeaders.length; index++) {
    const element = allArticleHeaders[index];
    element.classList.add("important")

    

}


const dashedElement =document.querySelector(".dashed")
dashedElement.classList.remove("dashed")

const footer =document.querySelector("article__footer")
footer.classList.add("goldenrod")