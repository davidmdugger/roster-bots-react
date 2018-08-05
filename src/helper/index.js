export const firstNames = [
  "Bill",
  "Jim",
  "Carrie",
  "Sage",
  "Kimberly",
  "Shonna",
  "David",
  "Matt",
  "José",
  "Josie",
  "Karl",
  "Terry",
  "Sarah",
  "Lupita",
  "Tamara",
  "Sean",
  "Tim",
  "Tom",
  "Jerry",
  "Mark",
  "Niall",
  "Michael",
  "Scott",
  "Emily",
  "Kyle",
  "Chris",
  "Thomas",
  "Jill",
  "Erin",
  "Kimberly"
];

export const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Moore",
  "Taylor",
  "Anderson",
  "Jackson",
  "Harris",
  "Martin",
  "Thompson",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Griffin",
  "Hill",
  "Carter",
  "Mitchell",
  "Nelson",
  "Perez",
  "Turner",
  "Campbell",
  "Parker",
  "Evans",
  "Collins"
];

// create random int
export const generateRandomInt = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// create unique id for each player
export const generateID = () => {
  return Math.random()
    .toString(30)
    .substr(2, 6)
    .toUpperCase();
};
