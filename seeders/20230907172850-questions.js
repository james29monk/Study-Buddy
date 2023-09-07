'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('questions', [
    {
      questions: 'The state of Hawaii is surrounded by what ocean? ',
      answer: 'Pacific',
      category_id: 1

    },
    {
      questions: 'What is the name of the lines that run east to west across a map?',
      answer: 'Latitude',
      category_id: 1

    },
    {
      questions: 'What is the name of the longest river in the world?',
      answer: 'Nile',
      category_id: 1

    },
    {
      questions: 'Which country is closest to the Great Barrier Reef?',
      answer: 'Australia',
      category_id: 1

    },
    {
      questions: 'What creates sound? ',
      answer: 'Vibrations',
      category_id: 2

    },
    {
      questions: 'Which planet is closest to the sun?',
      answer: 'Mercury',
      category_id: 2
    },
    {
      questions: "Heat is a form of what kind of energy",
      answer: 'Thermal',
      category_id: 2
    },
    {
      questions: 'Color, density, volume, and mass are properties of?',
      answer: 'Matter',
      category_id: 2
    },
    {
      questions: 'An electrical current is made up of what kind of particles? ',
      answer: 'Electrons',
      category_id: 2
    },
    {
      questions: 'A story about something that is made up is part of what genre',
      answer: 'Fiction',
      category_id: 3
    },
    {
      questions: "'Peter Piper picked a peck of pickled peppers' is an example of what?",
      answer: 'Alliteration',
      category_id: 3
    },
    {
      questions: 'What is the name of a collection of classical stories related to religion or cultural traditions',
      answer: 'Mythology',
      category_id: 3
    },
    {
      questions: "Name the figurative language used in this phrase: 'Brave as a lion'",
      answer: 'Simile',
      category_id: 3
    },
    {
      questions: 'What is it called when a character goes through a transformation journey in a story?',
      answer: 'Character arc',
      category_id: 3
    },
    {
      questions: 'In what kind of government are people allowed to vote?',
      answer: 'Democracy',
      category_id: 4
    },
    {
      questions: 'Who is known as the Father of the Constitution?',
      answer: 'James Madison',
      category_id: 4
    },
    {
      questions: 'The production, distribution, and consumption of goods and services refer to what?',
      answer: 'Economy',
      category_id: 4
    },
    {
      questions: 'What act did Britain impose on American colonists requiring taxes on various papers, documents, publications, and playing cards?',
      answer: 'The Stamp Act',
      category_id: 4
    },
    {
      questions: 'What was the ancient Egyptian writing system called?',
      answer: 'Hieroglyphics',
      category_id: 4
    },
    {
      questions: 'How many sides are on an octagon?',
      answer: 8,
      category_id: 5
    },
    {
      questions: 'If a square is five inches on each side, what is the perimeter of the square?',
      answer: "20 inches",
      category_id: 5
    },
    {
      questions: 'How do you represent 13 3/4 with decimals?',
      answer: 13.75,
      category_id: 5
    },
    {
      questions: 'How many hours and minutes are in 555 minutes',
      answer: '9 hours and 15 minutes',
      category_id: 5
    },
    {
      questions: 'If an ice cream shop sells 102 ice cream cones a day at 3$ each, how much money will they make in 5 days?',
      answer: 1503,
      category_id: 5
    },
    {
      questions: 'Which president is on the $5 bill?',
      answer: 'Abraham Lincoln',
      category_id: 6
    },
    {
      questions: 'Who was the first Vice President?',
      answer: 'John Adams',
      category_id: 6
    },
    {
      questions: 'Which country gifted the U.S. The Statue of Liberty',
      answer: 'France',
      category_id: 6
    },
    {
      questions: 'Who was president during the Revolutionary War?',
      answer: 'George Washington',
      category_id: 6
    },
    {
      questions: 'In what year did Abraham Lincoln issue the Emancipation Proclamation?',
      answer: 1863,
      category_id: 6
    },
    {
      questions: 'If Dre has 2 dogs and Zach has 3 cats, how many more cats does Zach have than Dre?',
      answer: 3,
      category_id: 7
    },
    {
      questions: 'If Tony is five feet tall and John is three and a half feet tall, how many inches taller is Tony than John?',
      answer: 18,
      category_id: 7
    },
    {
      questions: 'If you get 25% of your work done now and 50% later, how much will you have done?',
      answer: '50%',
      category_id: 7
    },
    {
      questions: 'If Ethan bought four apples, two oranges, one cantaloupe, three mangos, and two honeydews, how many melons does he have?',
      answer: 3,
      category_id: 7
    },
    {
      questions: 'Peauts are not nuts; they are ___',
      answer: 'Legumes',
      category_id: 7
    },


    

  ],
   {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
