const lists = [
    {
        head: "Notebooks",
        namesList: ["All Notes", "Markdown", "Projects"]
    },
    {
        head: "Subject",
        namesList: ["Math", "C++"]
    },
    {
        head: "Status",
        namesList: []
    },
    {
        head: "Types",
        namesList: []
    }
]

interface list {
    head: String,
    namesList: String[]
}

export class menuList {
    #menu_list!: list[];

    constructor() {
        this.#menu_list = lists;
    }

    get_list() {
        return this.#menu_list;
    }
}
