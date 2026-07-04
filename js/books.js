const books = [
    {
        title: "White Nights",
        author: "Fyodor Dostoevsky",
        genre: "Classics",
        favorite: false,
        tbr : false,
        rating: 0,
        status: "currently reading",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670583279i/10005316.jpg"
    },
    {
        title: "آینه در آینه",
        author: "Hooshang Ebtahaj",
        genre: "Poetry",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "Currently reading",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1221896297i/2767368.jpg"
    },
    {
        title: "The Plague",
        author: "Albert Camus",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 7,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1709092104i/439979.jpg"
    },
    {
        title: "Coraline: The Graphic Novel",
        author: "Neil Gaiman",
        genre: "Horror fiction",
        favorite: false,
        tbr : false,
        rating: 8.5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1348347289i/1967070.jpg"
    },
    {
        title: "Everything, Everything",
        author: "Nicola Yoon",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 8,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1450515891i/18692431.jpg"
    },
    {
        title: "They Both Die at the End",
        author: "Adam Silvera",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1494333138i/33385229.jpg"
    },
    {
        title: "Th First To Die at the End",
        author: "Adam Silvera",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647651404i/59723790.jpg"
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: "Science fantasy",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg"
    },
    {
        title: "The Only Story",
        author: "Julian Barnes",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1542140881i/42771492.jpg"
    },
    {
        title: "Schoolgirl",
        author: "Osamu Dazai",
        genre: "Drama",
        favorite: false,
        tbr : false,
        rating: 7,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647450251i/12483882.jpg"
    },
    {
        title: "Daisy Darker",
        author: "Alice Feeney",
        genre: "Mystery",
        favorite: false,
        tbr : false,
        rating: 4,
        status: "read",
        note: "a note",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1690904510i/195498826.jpg"
    },
    {
        title: "The Damned Yard",
        author: "Ivo Andrić",
        genre: "Historical",
        favorite: false,
        tbr : false,
        rating: 7,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1675415256i/84162143.jpg"
    },
    {
        title: "مثل خون در رگ های من",
        author: "Ahmad Shamlou",
        genre: "Poetry",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432024973i/25547097.jpg"
    },
    {
        title: "A Journey Around My Room",
        author: "Xavier de Maistre",
        genre: "Classics",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1557576892i/43307609.jpg"
    },
    {
        title: "Dying",
        author: "Arthur Schnitzler",
        genre: "Classics",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1525192086i/40018205.jpg"
    },
    {
        title: "Reunion",
        author: "Fred Uhlman",
        genre: "Historical Fiction",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1407023871i/863466.jpg"
    },
    {
        title: "Pulp",
        author: "Charles Bukowski",
        genre: "Detective fiction",
        favorite: false,
        tbr : false,
        rating: 9.5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1340203298i/6627313.jpg"
    },
    {
        title: "The Suicide Shop",
        author: "Jean Teulé",
        genre: "Black Humor",
        favorite: false,
        tbr : false,
        rating: 9.5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737468416i/45186042.jpg"
    },   
    {
        title: "We Were Liars",
        author: "E. Lockhart",
        genre: "Mystery Thriller",
        favorite: false,
        tbr : false,
        rating: 6,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1502799960i/26115894.jpg"
    },  
    {
        title: "Dead Poets Society",
        author: "Nancy Horowitz Kleinbaum",
        genre: "Dark Academia",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1368252673i/1290733.jpg"
    },
    {
        title: "The Night Gardener",
        author: "Jonathan Auxier",
        genre: "Fantasy",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1511357999i/36641514.jpg"
    },
    {
        title: "The Fall",
        author: "Albert Camus",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 6,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1340263844i/440009.jpg"
    },
    {
        title: "Beartown",
        author: "Fredrik Backman",
        genre: "Sports",
        favorite: false,
        tbr : false,
        rating: 9.5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1508701635i/36458891.jpg"
    },
    {
        title: "Daisy Jones & The Six",
        author: "Taylor Jenkins Reid",
        genre: "Music",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580255154i/40597810.jpg"
    },
    {
        title: "The Girl Who Drank the Moon",
        author: "Kelly Barnhill",
        genre: "Fantasy",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1500815655i/35786087.jpg"
    },
    {
        title: "سمفونی مردگان",
        author: "Abbas Maroufi",
        genre: "Drama",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1525518674i/300905.jpg"
    },
    {
        title: "Dark Places",
        author: "Gillian Flynn",
        genre: "Drama",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1520801060i/39117616.jpg"
    },
    {
        title: "Every Day",
        author: "David Levithan",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1548707644i/43733184.jpg"
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fantasy",
        favorite: false,
        tbr : false,
        rating: 9.5,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689396645i/61160034.jpg"
    },
    {
        title: "Everything You Want Me to Be",
        author: "Mindy Mejia",
        genre: "Thriller",
        favorite: false,
        tbr : false,
        rating: 8,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1583252866i/52051034.jpg"
    },
    {
        title: "Tolstoy and the Purple Chair",
        author: "Nina Sankovitch",
        genre: "Memoir",
        favorite: false,
        tbr : false,
        rating: 6,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1526460810i/40130544.jpg"
    },
    {
        title: "قهوه سرد آقای نویسنده",
        author: "Rouzbeh Moein",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 4,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1494532025i/34996810.jpg"
    },
    {
        title: "The Orange Girl",
        author: "Jostein Gaarder",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 7,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1206528383i/1907140.jpg"
    },
    {
        title: "Five Feet Apart",
        author: "Rachael Lippincott",
        genre: "Romance",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1601909511i/49385152.jpg"
    },
    {
        title: "تکه‌هایی از یک کل منسجم",
        author: "Poune Moghimi",
        genre: "Self Help",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562867614l/52882322.jpg"
    },
    {
        title: "Big Panda & Tiny Dragon",
        author: "James Norbury",
        genre: "Self Help",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668501457i/59434716.jpg"
    },
    {
        title: "The Boy, the Mole, the Fox and the Horse",
        author: "Charlie Macksey",
        genre: "Self Help",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590333444i/53426212.jpg"
    },
    {
        title: "Letter to a Child Never Born",
        author: "Oriana Fallaci",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722459322i/13589193.jpg"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        genre: "Politics",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1523391696i/39797515.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Politics",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
    },
    {
        title: "Before the Coffee Gets Cold",
        author: "Toshikazu Kawaguchi",
        genre: "Fantasy",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1625291917i/58476931.jpg"
    },
    {
        title: "The Stranger",
        author: "Albert Camus",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1709092156i/440020.jpg"
    },
    {
        title: "Caligula",
        author: "Albert Camus",
        genre: "Philosophy",
        favorite: false,
        tbr : false,
        rating: 8,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1340264003i/1314073.jpg"
    },
    {
        title: "The sadness of beautiful things",
        author: "Simon Van Booy",
        genre: "Short Stories",
        favorite: false,
        tbr : false,
        rating: 7,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590116448i/53458209.jpg"
    },
    {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 8,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1675886907i/106810309.jpg"
    },
    {
        title: "Ties",
        author: "Domenico Starnone",
        genre: "Fiction",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647767173i/60652466.jpg"
    },
    {
        title: "The Last Movement",
        author: "Robert Seethaler",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1738747053i/226833149.jpg"
    },
    {
        title: "And Every Morning The Way Home Gets Longer",
        author: "Fredrik Backman",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488837541i/34496368.jpg"
    },
    {
        title: "The Deal of a Lifetime",
        author: "Fredrik Backman",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1521885663i/39391552.jpg"
    },
    {
        title: "Anxious People",
        author: "Fredrik Backman",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1588328188i/53305541.jpg"
    },
    {
        title: "Us Against You",
        author: "Fredrik Backman",
        genre: "Sports",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546073459i/42102001.jpg"
    },
    {
        title: "The Winners",
        author: "Fredrik Backman",
        genre: "Sports",
        favorite: false,
        tbr : false,
        rating: 8,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680789080i/125635921.jpg"
    },
    {
        title: "My Grandmother Asked Me to Tell You She's Sorry",
        author: "Fredrik Backman",
        genre: "Fiction",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1486495505i/34189555.jpg"
    },
    {
        title: "Around the World in Eighty Days",
        author: "Jules Verne",
        genre: "Classic",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1726227588i/367872.jpg"
    },
    {
        title: "If Cats Disappeared from the World",
        author: "Genki Kawamura",
        genre: "Fantasy",
        favorite: false,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1542377525i/40740914.jpg"
    },
    {
        title: "Into The Wild",
        author: "Jon Krakauer",
        genre: "Adventure",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1658489621i/61651904.jpg"
    },
    {
        title: "Tante Rosa",
        author: "JSevgi Soysal",
        genre: "Feminism",
        favorite: true,
        tbr : false,
        rating: 10,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1762509847i/243669446.jpg"
    },
    {
        title: "Eight Perfect Murders",
        author: "Peter Swanson",
        genre: "Mystery",
        favorite: false,
        tbr : false,
        rating: 9,
        status: "read",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1593612903i/54350591.jpg"
    },
    {
        title: "مجموعه اشعار فروغ فرخزاد",
        author: "Forugh Farrokhzad",
        genre: "Poetry",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1763612915i/199553643.jpg"
    },
    {
        title: "Água Viva",
        author: "Clarice Lispector",
        genre: "Philosophy",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655722688i/13082435.jpg"
    }, 
    {
        title: "If We Were Villains",
        author: "M. L. Rio",
        genre: "Dark Academia",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1480717682i/30319086.jpg"
    },
    {
        title: "Stoner",
        author: "John Williams",
        genre: "Classics",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1742326950i/166997.jpg"
    },
    {
        title: "The Bell Jar",
        author: "Sylvia Plath",
        genre: "Classics",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668645154i/56616095.jpg"
    },
    {
        title: "On Earth We're Briefly Gorgeous",
        author: "Ocean Vuong",
        genre: "Poetry",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1615580168i/41880609.jpg"
    },
    {
        title: "Time Is a Mother",
        author: "Ocean Vuong",
        genre: "Poetry",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1626846358i/58582927.jpg"
    },
    {
        title: "Blue Sisters",
        author: "Coco Mellors",
        genre: "Fiction",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1726685281i/195430687.jpg"
    },
    {
        title: "بوف کور",
        author: "Sadegh Hedayat",
        genre: "Fiction",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1709043680i/171942.jpg"
    },
    {
        title: "Ugliness: A Cultural History",
        author: "Gretchen E. Henderson",
        genre: "Philosophy",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1710518324i/209595535.jpg"
    },
    {
        title: "به زبان مادری گریه می‌کنیم",
        author: "Fabio Morábito",
        genre: "Essays",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1701424336i/203033458.jpg"
    },
    {
        title: "Death in Spring",
        author: "Mercè Rodoreda",
        genre: "Fiction",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1709815661i/209594857.jpg"
    },
    {
        title: "Beirut 75",
        author: "Ghada Samman",
        genre: "Fiction",
        favorite: false,
        tbr : true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1510995161i/36616427.jpg"
    },
    {
        title: "His Bloody Project",
        author: "Graeme Macrae Burnet",
        genre: "Crime",
        favorite: false,
        tbr: true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1433870239i/25694617.jpg"
    },
    {
        title: "The Ballad of the Sad Café",
        author: "Carson McCullers",
        genre: "Short Stories",
        favorite: false,
        tbr: true,
        rating: 0,
        status: "tbr",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1617983998i/57677164.jpg"
    },
];