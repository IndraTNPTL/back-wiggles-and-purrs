const mongoose = require("mongoose");
const MONGODB_URI =
	"mongodb+srv://crystinekoh:TL5tnySLlXciRWAG@cluster0.8h51dku.mongodb.net/wiggles-and-purrs?retryWrites=true&w=majority";

const Pet = require("../models/pet.model");

const pets = [
	{
		name: "Nougat",
		specie: "cat",
		breed: "Ragamuffin",
		rangeAge: "2 - 5 years",
		gender: "Female",
		size: "Medium",
		color: ["Brown"],
		description:
			"This mischievous cat will keep you on your toes with their playful antics.",
		photo: "",
		foundDate: "March 3, 2022",
		location: "Paris",
		available: true,
	},
	{
		name: "Buddy",
		specie: "dog",
		breed: "Golden Retriever",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Medium",
		color: ["Brown", "White"],
		description:
			"Meet Buddy, the goofball who will bring endless laughter and tail-wagging joy to your life.",
		photo: "https://example.com/buddy.jpg",
		foundDate: "April 18, 2020",
		location: "Marseille",
		available: true,
	},
	{
		name: "Milo",
		specie: "cat",
		breed: "Persian",
		rangeAge: "6 - 12 months",
		gender: "Male",
		size: "Large",
		color: ["Black", "White"],
		description:
			"Milo, the furry fashionista, is here to grace your home with his majestic presence and sassy attitude.",
		photo: "https://example.com/milo.jpg",
		foundDate: "July 20, 2022",
		location: "Los Angeles",
		available: true,
	},
	{
		name: "Mia",
		specie: "dog",
		breed: "Pug",
		rangeAge: "1 - 2 years",
		gender: "Female",
		size: "Small",
		color: ["Gray", "White"],
		description:
			"Prepare to fall head over paws for Mia, the adorable little diva who knows how to melt hearts with her big round eyes.",
		photo: "https://example.com/mia.jpg",
		foundDate: "August 5, 2021",
		location: "Chicago",
		available: true,
	},
	{
		name: "Oreo",
		specie: "cat",
		breed: "Siamese",
		rangeAge: "8 + years",
		gender: "Unknown",
		size: "Medium",
		color: ["Black", "White"],
		description:
			"Oreo, the wise and dignified cat, brings a touch of elegance and a dash of mischief to any household.",
		photo: "https://example.com/oreo.jpg",
		foundDate: "February 13, 2020",
		location: "Seattle",
		available: true,
	},
	{
		name: "Luna",
		specie: "dog",
		breed: "Schnauzer",
		rangeAge: "Under 6 months",
		gender: "Female",
		size: "Small",
		color: ["Black", "White"],
		description:
			"Luna, the tiny tornado of joy, will keep you entertained with her boundless energy and adorable antics.",
		photo: "https://example.com/luna.jpg",
		foundDate: "January 4, 2021",
		location: "Dallas",
		available: true,
	},
	{
		name: "Max",
		specie: "dog",
		breed: "Golden Retriever",
		rangeAge: "2 - 5 years",
		gender: "Female",
		size: "Medium",
		color: ["Golden"],
		description:
			"Max, the sunshine enthusiast, will brighten up your days with their wagging tail and contagious enthusiasm.",
		photo: "https://example.com/max.jpg",
		foundDate: "April 15, 2023",
		location: "Madrid",
		available: true,
	},
	{
		name: "Olivier",
		specie: "cat",
		breed: "Chartreux",
		rangeAge: "8 + years",
		gender: "Male",
		size: "Medium",
		color: ["Gray"],
		description:
			"Olivier, the feline philosopher, will ponder the mysteries of life with you while basking in the sun.",
		photo: "https://example.com/olivier.jpg",
		foundDate: "February 5, 2023",
		location: "Rome",
		available: true,
	},
	{
		name: "Whiskers",
		specie: "cat",
		breed: "Sphynx",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Small",
		color: ["Pink"],
		description:
			"Whiskers, the hairless wonder, will keep you warm with his snuggles and stylish sweaters.",
		photo: "https://example.com/whiskers.jpg",
		foundDate: "September 10, 2022",
		location: "New York",
		available: true,
	},
	{
		name: "Fuzzball",
		specie: "dog",
		breed: "Sheepdog",
		rangeAge: "2 - 5 years",
		gender: "Female",
		size: "Large",
		color: ["White"],
		description:
			"Fuzzball, the walking cloud, will bring a touch of whimsy and endless fluff to your life.",
		photo: "https://example.com/fuzzball.jpg",
		foundDate: "May 2, 2021",
		location: "London",
		available: true,
	},
	{
		name: "Sir Barksalot",
		specie: "dog",
		breed: "Dachshund",
		rangeAge: "1 - 2 years",
		gender: "Male",
		size: "Small",
		color: ["Brown"],
		description:
			"Sir Barksalot, the mini knight, will guard your home with fierce determination and adorable yips.",
		photo: "https://example.com/sir-barksalot.jpg",
		foundDate: "December 24, 2020",
		location: "Berlin",
		available: true,
	},
	{
		name: "Miss Purrfect",
		specie: "cat",
		breed: "Snowshoe",
		rangeAge: "5 - 7 years",
		gender: "Female",
		size: "Large",
		color: ["Orange", "White"],
		description:
			"Miss Purrfect, the queen of floof, will grace your home with regal elegance and occasional zoomies.",
		photo: "https://example.com/miss-purrfect.jpg",
		foundDate: "November 9, 2019",
		location: "Tokyo",
		available: true,
	},
	{
		name: "Captain Wigglebutt",
		specie: "dog",
		breed: "Akita",
		rangeAge: "8 + years",
		gender: "Male",
		size: "Medium",
		color: ["Brindle"],
		description:
			"Captain Wigglebutt, the slobbering superhero, will save your day with his drooly kisses and wiggly tail.",
		photo: "https://example.com/captain-wigglebutt.jpg",
		foundDate: "March 17, 2018",
		location: "Sydney",
		available: true,
	},
	{
		name: "Sprinkles",
		specie: "cat",
		breed: "Husky",
		rangeAge: "6 - 12 months",
		gender: "Female",
		size: "Small",
		color: ["Gray", "White"],
		description:
			"Sprinkles, the purrfect pastry, will add a sprinkle of joy and cuteness to your daily routine.",
		photo: "https://example.com/sprinkles.jpg",
		foundDate: "April 3, 2023",
		location: "Toronto",
		available: true,
	},
	{
		name: "Baron Von Biscuit",
		specie: "dog",
		breed: "Husky",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Medium",
		color: ["Black"],
		description:
			"Baron Von Biscuit, the sophisticated sniffer, will assist you in finding the finest treats and the most fashionable accessories.",
		photo: "https://example.com/baron-von-biscuit.jpg",
		foundDate: "August 7, 2022",
		location: "Paris",
		available: true,
	},
	{
		name: "Penelope",
		specie: "cat",
		breed: "Munchkin",
		rangeAge: "Under 6 months",
		gender: "Female",
		size: "Small",
		color: ["gray", "white"],
		description:
			"A tiny kitten with an attitude. Loves to climb and play with string.",
		photo: "https://example.com/penelope.jpg",
		foundDate: "December 15, 2022",
		location: "Berlin",
		available: true,
	},
	{
		name: "Banana",
		specie: "dog",
		breed: "Cocker Spaniel",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Medium",
		color: ["black", "white"],
		description:
			"A happy-go-lucky dog who loves to dance and chase his tail.",
		photo: "https://example.com/banana.jpg",
		foundDate: "January 25, 2023",
		location: "Tokyo",
		available: true,
	},
	{
		name: "Franklin",
		specie: "cat",
		breed: "Bengal",
		rangeAge: "6 - 12 months",
		gender: "Male",
		size: "Medium",
		color: ["brown", "white"],
		description:
			"A mischievous and curious cat who loves to hide and play hide-and-seek.",
		photo: "https://example.com/franklin.jpg",
		foundDate: "October 10, 2022",
		location: "Mumbai",
		available: true,
	},
	{
		name: "Lexi",
		specie: "dog",
		breed: "Poodle",
		rangeAge: "8 + years",
		gender: "Female",
		size: "Medium",
		color: ["black", "white"],
		description:
			"A regal and elegant senior dog who loves to nap and give kisses.",
		photo: "https://example.com/lexi.jpg",
		foundDate: "June 28, 2021",
		location: "Rio de Janeiro",
		available: true,
	},
	{
		name: "Sushi",
		specie: "cat",
		breed: "Japanese Bobtail",
		rangeAge: "1 - 2 years",
		gender: "Female",
		size: "Small",
		color: ["white"],
		description:
			"A feisty and fluffy cat who loves to chase butterflies and play in the snow.",
		photo: "https://example.com/sushi.jpg",
		foundDate: "April 22, 2023",
		location: "Sydney",
		available: true,
	},
	{
		name: "Zeus",
		specie: "dog",
		breed: "Beagle",
		rangeAge: "1 - 2 years",
		gender: "Male",
		size: "Small",
		color: ["black", "white"],
		description:
			"A playful and energetic puppy who loves to chase squirrels and chew on toys.",
		photo: "https://example.com/zeus.jpg",
		foundDate: "November, 2022",
		location: "Perth",
		available: true,
	},
	{
		name: "Mr. Whiskers",
		specie: "cat",
		breed: "British Shorthair",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Medium",
		color: ["Gray"],
		description:
			"Mr. Whiskers, the dapper gentleman, will charm you with his impeccable manners and sophisticated purrs.",
		photo: "https://example.com/mr-whiskers.jpg",
		foundDate: "May 12, 2022",
		location: "London",
		available: true,
	},
	{
		name: "Princess Fluffy",
		specie: "dog",
		breed: "Pomeranian",
		rangeAge: "1 - 2 years",
		gender: "Female",
		size: "Small",
		color: ["White"],
		description:
			"Princess Fluffy, the diva extraordinaire, will rule your heart with her glamorous outfits and sassy attitude.",
		photo: "https://example.com/princess-fluffy.jpg",
		foundDate: "July 8, 2021",
		location: "Los Angeles",
		available: true,
	},
	{
		name: "Sir Biscuit",
		specie: "cat",
		breed: "Exotic Shorthair",
		rangeAge: "5 - 7 years",
		gender: "Male",
		size: "Medium",
		color: ["Cream"],
		description:
			"Sir Biscuit, the feline aristocrat, will keep you entertained with his noble lounging skills and impeccable taste in nap spots.",
		photo: "https://example.com/sir-biscuit.jpg",
		foundDate: "January 23, 2019",
		location: "Paris",
		available: true,
	},
	{
		name: "Miss Wigglebottom",
		specie: "dog",
		breed: "Bulldog",
		rangeAge: "8 + years",
		gender: "Female",
		size: "Medium",
		color: ["Brindle"],
		description:
			"Miss Wigglebottom, the wiggly wonder, will wiggle her way into your heart with her charming snorts and wiggly butt.",
		photo: "https://example.com/miss-wigglebottom.jpg",
		foundDate: "October 5, 2017",
		location: "New York",
		available: true,
	},
	{
		name: "Captain Whiskerbeard",
		specie: "cat",
		breed: "Sphynx",
		rangeAge: "8 + years",
		gender: "Male",
		size: "Medium",
		color: ["Gray"],
		description:
			"Captain Whiskerbeard, the daring adventurer, will conquer your heart with his fearless spirit and velvety smooth whiskers.",
		photo: "https://example.com/captain-whiskerbeard.jpg",
		foundDate: "September 14, 2016",
		location: "Barcelona",
		available: true,
	},
	{
		name: "Duchess Puddles",
		specie: "dog",
		breed: "Bichon Frise",
		rangeAge: "1 - 2 years",
		gender: "Female",
		size: "Small",
		color: ["White"],
		description:
			"Duchess Puddles, the elegant explorer, will lead you on grand adventures to find the finest puddles and the tastiest treats.",
		photo: "https://example.com/duchess-puddles.jpg",
		foundDate: "June 30, 2020",
		location: "Amsterdam",
		available: true,
	},
	{
		name: "Count Whiskerstein",
		specie: "cat",
		breed: "Russian Blue",
		rangeAge: "2 - 5 years",
		gender: "Male",
		size: "Medium",
		color: ["Blue"],
		description:
			"Count Whiskerstein, the mysterious nocturne, will enchant you with his piercing gaze and bewitching purrs under the moonlight.",
		photo: "https://example.com/count-whiskerstein.jpg",
		foundDate: "February 8, 2022",
		location: "Paris",
		available: true,
	},
];

mongoose
	.connect(MONGODB_URI)
	.then(async (x) => {
		try {
			console.log(
				`Connected to Mongo! Database name: "${x.connections[0].name}"`
			);
			// await Pet.deleteMany();

			const newPets = await Pet.create(pets);
			console.log(newPets);

			process.exit();
		} catch (error) {
			console.error("Unable to create new pets.");
			console.log(error);
		}
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB: " + err);
	})
	.finally(() => {
		mongoose.disconnect();
		console.log("Disconnected from the database.");
	});
