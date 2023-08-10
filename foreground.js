setTimeout(function() {
    let element = document.getElementById("gamelaunch");
    if (element) {
        let src = element.src;
        let reg = /placeId%3D(.*)%26accessCode%3D(.*)%26linkCode%3D(.*)%26/gm;
        let result = reg.exec(src);
        let placeid = result[1];
        let accesscode = result[2];
        let linkcode = result[3];

        const di = document.getElementById("game-details-play-button-container");

        const bt = document.createElement("button");
        bt.style.border = "none";
        bt.style.background = "transparent";
        bt.style.padding = "0";
        bt.style.width = "66px";
        bt.style.minWidth = "66px";
        bt.style.marginLeft = "3px";
        bt.style.position = "relative";
        bt.style.zIndex = "1045";

        const img = document.createElement("img");
        img.src = "https://imgur.com/8KAZt2n.png";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.right = "0";
        img.style.borderRadius = "10px";

        bt.appendChild(img);
        di.appendChild(bt);

        bt.addEventListener("click", () => {
            window.open(`roblox://placeID=${placeid}&accessCode=${accesscode}&linkCode=${linkcode}`, "_self");
        });

        console.log("UWP Private Servers Loaded :p");
    }
}, 400);
