class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor" || "Anonymous"));

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("img-news");

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            display: flex;
            flex-direction: row;
            box-shadow: 7px 7px 10px -4px rgba(0, 0, 0, 0.169);
            -webkit-box-shadow: 7px 7px 24px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 7px 7px 24px -4px rgba(0,0,0,0.75);
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: gray;
        }
        
        .card_left > span {
            font-weight: 400;
        }
    `;

    return style;
    }
}

customElements.define("card-news", Cardnews);