let programming_languages = ["life", "pig", "the"
,"name"
,"the"
,"june"
,"donkey"
,"monkey"
,"six"
,"chess"
,"blue"
,"life"
,"pig"
,"me"
,"pizza"
,"hangman"
,"you"
];
function randomWord() {
  return programming_languages[
    Math.floor(Math.random() * programming_languages.length)
  ];
}

export { randomWord };
