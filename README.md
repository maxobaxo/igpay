words with non-alphabetic characters returns ERROR.
  input: 33pp
  output: Non-Letters Detected!
define vowels, detect presence of vowel in string
  input: dad
  output: vowel spotted!
define y as a vowel except when it is the first letter of the word
  input: your, output: alert(y is not a vowel)
  input: toy. output: alert(y is a vowel)
words beginning with a vowel, add "way" to the end
  input: about
  output: aboutway
words beginning with y, move y to the end and add "ay"
  input: your
  output: ouryay
