"use strict";

let textInstance;
let focused = true;
const slicedClassTag = "char";
const textsPath = '/assets/texts.json';
const destination = document.querySelector("#textbox");

/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
function hashFnv32a(str, asString, seed) {
    var i, l,
        hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if( asString ){
        // Convert to 8 digit hex string
        return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
    }
    return hval >>> 0;
}


(async () => {

    // Mobile check
    window.addEventListener("load", () => {
        window.mobilecheck = function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        if (mobilecheck()) {
            alert("Huomaathan, että tämä sivu ei toimi ilman fyysistä näppäimistöä.");
        }
    });

    // Loads content from a json file. Returns a promise.
    function loadJSON(path) {
        let req = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            req.overrideMimeType("application/json");
            req.open('GET', path, true);
            req.onreadystatechange = () => {
                if (req.readyState == 4 && req.status == "200") {
                    let response = JSON.parse(req.responseText);
                    return resolve(response);
                }
            }
            req.send(null);
        })

    }

    // Return a random item from an array
    function randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    // Slice DOM element into one character long span elements.
    function sliceString(text, classtag = "sliced") {
        let outputElement = document.createElement('DIV')
        outputElement.setAttribute("class", "slicedString")

        for (let i = 0; i < text.length; i++) {
            let char = document.createElement('span');
            char.setAttribute("class", `slicedChar ${classtag}${i}`)
            char.innerText = text.charAt(i);
            outputElement.appendChild(char)
        }

        while (destination.firstChild) {
            destination.removeChild(destination.firstChild);
        }

        destination.appendChild(outputElement)
    }

    // Calculate current WPM based on text instance

    function calculateMissedCharacters(textInstance) {
        return textInstance.text.characters.reduce((accumulated, current) => current.failed ? accumulated + 1 : accumulated, 0)
    }

    function getWPM(textInstance) {
        return parseInt((textInstance.characterindex) / 5 / ((Date.now() - textInstance.timing) * 0.0000166666));
    }

    function getAccuracy(textInstance) {
        const missed = calculateMissedCharacters(textInstance)
        const characterindex = textInstance.maxcharacterindex
        return parseInt((characterindex - missed) / characterindex * 100)
    }

    // Set WPM style/content changes
    function setVisualStats(textInstance, state = "ongoing") {
        let { wpm = 0, accuracy = 100 } = textInstance.stats;
        const wpmDisplay = document.querySelector("#wpmdisplay")
        const accuracyDisplay = document.querySelector("#accuracydisplay")
        const statsQuery = document.querySelector(".stats")
        wpmDisplay.textContent = wpm;

        switch (state) {
            case "default":
                statsQuery.style.color = "inherit";
                statsQuery.style.backgroundColor = "inherit";
                break;
            case "completed":
                statsQuery.style.color = "white";
                statsQuery.style.backgroundColor = "lightgreen";
                break;
        }

        wpmDisplay.textContent = wpm;
        accuracyDisplay.textContent = accuracy;
    }


    // For character style changing
    function setVisualCharacter(element, state, key) {
        switch (state) {
            case "incorrect":
                element.style.color = "black"
                element.style.backgroundColor = "#f5dddd"
                break;
            case "correct":
                element.style.color = key.failed ? "#7faf23" : "#25b72b"
                element.style.backgroundColor = key.failed ? "#f7edd9" : "#f3f3f3"
                break;
            case "default":
                element.style.color = "inherit"
                element.style.backgroundColor = "inherit"
                break;
        }

    }

    // Toggle between game focus states
    function changeFocusState(focus = undefined, textInstance) {
        const unfocusElement = document.getElementById("unfocus");
        if (focus == true) {
            focused = true;
            textInstance.focused = false;
            unfocusElement.style.zIndex = 2;
            unfocusElement.style.opacity = 100;
        } else if (focus == false) {
            focused = false
            textInstance.focused = true;
            unfocusElement.style.zIndex = -1;
            unfocusElement.style.opacity = 0;
        }
    }

    // Load a new text into the game and set text instance as loaded.
    function loadText(textInstance) {
        sliceString(textInstance.text.content, slicedClassTag)
        textInstance.loaded = true;
        return null;
    }

    // Check if received key is valid and needs to be registered.
    function validKey(event, textInstance) {
        let keycode = event.keyCode;

        // If instance is not in focus, or the instance is completed, return.
        if (textInstance.completed || !textInstance.focused) {
            return false;
        }

        // If the key does not need to be registered, return.
        if (event.ctrlKey || event.metaKey || event.altKey) {
            return false;
        }

        // Check if key is valid
        let valid = (keycode === 8) || (keycode > 47 && keycode < 58) || (keycode === 32) || (keycode > 64 && keycode < 91) || (keycode > 95 && keycode < 112) || (keycode > 185 && keycode < 193) || (keycode > 218 && keycode < 223);

        if (valid) {
            return true;
        } else {
            return false;
        }
    }

    // Create text instances for game to run upon.
    function createTextInstance(text, custom = false) {
        let textHash = hashFnv32a(text, true)
        let words = [];
        text.split(" ").forEach((w, i) => {
            words[i] = {
                word: w,
                length: w.length,
                characters: []
            }
            for (let j = 0; j < w.length; j++) {
                words[i].characters.push(w[j]);
            }
        })

        let characters = [];
        text.split("").forEach((c, i) => {
            if (c.match(/\ /)) {
                characters.push({
                    character: "&nbsp;",
                    typed: false,
                    failed: false
                })
            } else {
                characters.push({
                    character: c,
                    typed: false,
                    failed: false
                })
            }
        })

        let textInstance = {
            text: {
                content: text,
                words: words,
                characters: characters,
                customText: custom,
                id: textHash
            },
            keypresses: {
                ok: 0,
                fail: 0
            },
            stats: {
                wpm: undefined,
                accuracy: undefined
            },
            completed: false,
            focused: true,
            loaded: false,
            characterindex: 0,
            maxcharacterindex: 0,
            timing: null
        }
        return textInstance
    }

    function resetTextInstance(textInstance) {
        textInstance = createTextInstance(textInstance.text.content)
        setTextInstance(textInstance)
    }

    function setTextInstance(textInstance) {
        loadText(textInstance)
        setVisualStats(textInstance, "default")
        return textInstance
    }

    // Create a text instance from a custon text
    function setCustomTextInstance(customText, textInstance) {
        customText = customText.trim()
        // If the custom text is faulty
        if (!customText || customText.length < 1) {
            return;
        }

        textInstance = createTextInstance(customText, true)
        setTextInstance(textInstance)
        openCustomTextMenu(false, textInstance)

        return textInstance
    }

    function setRandomTextInstance(texts, textInstance) {
        textInstance = createTextInstance(randomFromArray(texts), false)
        setTextInstance(textInstance)
        return textInstance
    }

    // Opens and closes custom text menu
    function openCustomTextMenu(state, textInstance) {
        const textmenu = document.getElementById("input-text")

        if (state === true) {
            changeFocusState(true, textInstance)

            textmenu.style.zIndex = 2;
            textmenu.style.opacity = 100;
        } else if (state === false) {
            changeFocusState(false, textInstance)

            textmenu.style.zIndex = -1;
            textmenu.style.opacity = 0;
        }
    }

    // Main listening function
    function typingListener(event, textInstance) {
        let key = event.key;
        let keycode = event.keyCode;
        let characterindex = textInstance.characterindex

        if (!validKey(event, textInstance)) return null;

        if (!textInstance.timing) {
            textInstance.timing = Date.now()
        }

        // Change spacebars to &nbsp; to ease stuff later.
        if (keycode === 32) {
            key = "&nbsp;";
        }

        let keyToMatch = textInstance.text.characters[characterindex];

        // DOM element for the ongoing character.
        let keyElement = document.querySelector(`.${slicedClassTag}${characterindex}`)

        // Variable to contain wether typed key was correct etc.
        let keyState;

        if (key === keyToMatch.character) {
            keyState = "correct";

            keyToMatch.typed = true;

            textInstance.keypresses.ok++;

        } else if (keycode === 8 || key === "Backspace") {
            keyState = "default";

            characterindex === 0 ? null : keyElement = document.querySelector(`.${slicedClassTag}${characterindex - 1}`)

        } else {
            keyState = "incorrect";

            keyToMatch.typed = false;

            if (key !== "Backspace") {
                keyToMatch.failed = true;
            }


            textInstance.keypresses.fail++;
        }

        setVisualCharacter(keyElement, keyState, keyToMatch)

        if (characterindex > 0) {

            textInstance.stats.wpm = getWPM(textInstance)
            textInstance.stats.accuracy = getAccuracy(textInstance)
            setVisualStats(textInstance, "default")
        }

        // Change index of the ongoing character
        if (keycode === 8 || key === "Backspace") {
            characterindex > 0 ? textInstance.characterindex-- : null;
        } else {
            textInstance.characterindex++;

        }

        if (textInstance.characterindex >= textInstance.text.characters.length) {
            textInstance.completed = true;
            setVisualStats(textInstance, "completed")
        }

        if (textInstance.characterindex > textInstance.maxcharacterindex) {
            textInstance.maxcharacterindex = textInstance.characterindex
        }

    }


    // Prevent default behaviour for different browser features.
    document.addEventListener("keypress", event => {
        if ([13, 8, 222, 160].indexOf(event.keyCode) > -1 && ["input", "textarea"].indexOf(event.target.nodeName.toLowerCase()) === -1) {
            event.preventDefault();
        }
    });



    const { texts } = await loadJSON(textsPath)
    textInstance = setRandomTextInstance(texts)


    // Detect keypresses and handle them in typing listener
    document.addEventListener("keydown", (event) => {
        typingListener(event, textInstance)
    })

    // Handle open custom text "events"
    document.querySelector("#customtext").addEventListener('click', (event) => {
        openCustomTextMenu(true, textInstance)
    })

    // Handle custom text cancel "events"
    document.querySelector("#cancelcustomtext").addEventListener('click', (event) => {
        openCustomTextMenu(false, textInstance)
    })

    // Handle custom text ok "events"
    document.querySelector("#engagecustomtext").addEventListener('click', (event) => {
        let customText = document.getElementById("texttoload").value;
        textInstance = setCustomTextInstance(customText, textInstance)
    })

    // Handle reset text "events"
    document.querySelector("#resettext").addEventListener('click', (event) => {
        resetTextInstance(textInstance)
    })

    // Handle random text "events"
    document.querySelector("#randomtext").addEventListener('click', (event) => {
        textInstance = setRandomTextInstance(texts)
    })
})();

