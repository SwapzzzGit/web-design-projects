const peopleArray = [
    {
        name: "Raj Kumar",
        lorem10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Stranger",
        imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Priya Patel",
        lorem10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Stranger",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        name: "Amit Sharma",
        lorem10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Stranger",
        imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        name: "Anika Singh",
        lorem10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Stranger",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        name: "Vikram Mehta",
        lorem10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Stranger",
        imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

peopleArray.forEach(function (val, index) {
    const card = document.createElement("div");
    card.id = "card";

    const image = document.createElement("img");
    image.src = val.imageUrl;
    image.alt = val.name;

    const heading = document.createElement("h2");
    heading.textContent = val.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = val.lorem10;

    const statusSpan = document.createElement("span");
    statusSpan.textContent = val.status;

    const addButton = document.createElement("button");
    addButton.textContent = "Add Friend";
    addButton.id = index; // Adding an ID to the button

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(statusSpan);
    card.appendChild(addButton);

    document.body.appendChild(card);
});
