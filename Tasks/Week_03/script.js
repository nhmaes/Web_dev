class Flashcard {
    constructor(term, definition, x, y) {
        this.term = term;
        this.definition = definition;
        this.x = x;
        this.y = y;
    }
}

const techDictionary = [
    new Flashcard("Open source", "Software whose source code is available for people to inspect, use, and often modify or share under a license.", 9, 15),
    new Flashcard("Closed source", "Software whose source code is kept private and can only be used under the owner's terms.", 34, 10),
    new Flashcard("Trojan horse", "Malicious software disguised as a harmless or useful program, which can carry out unwanted actions once installed.", 63, 16),
    new Flashcard("Cyberspace", "The interconnected digital world of the internet, computers, and online communication.", 89, 13),
    new Flashcard("Cyberwarfare", "The use of cyberattacks by or on behalf of a country to disrupt, damage, or spy on another country's systems.", 18, 45),
    new Flashcard("Cyberfeminism", "The study and use of digital technology to explore or challenge gender inequality and advance feminist ideas.", 45, 40),
    new Flashcard("Fibre", "A thin strand of material; in technology, fibre-optic cable carries data as pulses of light.", 72, 48),
    new Flashcard("Censorship", "The control or suppression of information, speech, or media that an authority considers objectionable.", 91, 44),
    new Flashcard("Emerging tech", "New or rapidly developing technology that may significantly affect how people live or work.", 10, 78),
    new Flashcard("Malware", "Software designed to harm, disrupt, spy on, or gain unauthorized access to a device or computer system.", 36, 76),
    new Flashcard("The Cloud", "A way of storing data and using software or computing power on remote internet-connected servers instead of only on a personal device.", 64, 82),
    new Flashcard("Cookies", "Small pieces of data that a website stores in your browser to remember information, such as your preferences or whether you are signed in.", 88, 77)
];

const container = document.getElementById("dictionary-container");
const conveyorTrack = document.getElementById("conveyor-track");

if (conveyorTrack) {
    const addConveyorCards = (items, hidden = false) => {
        items.forEach(item => {
            const card = document.createElement("article");
            card.className = "conveyor-card";
            if (hidden) {
                card.setAttribute("aria-hidden", "true");
            }

            const term = document.createElement("h2");
            term.className = "conveyor-term";
            term.textContent = item.term;

            const definition = document.createElement("p");
            definition.className = "conveyor-definition";
            definition.textContent = item.definition;

            card.append(term, definition);
            conveyorTrack.appendChild(card);
        });
    };

    addConveyorCards(techDictionary);
    addConveyorCards(techDictionary, true);
}
