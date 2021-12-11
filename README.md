# alien-civilization
This is a formula I made to calculate the active alien civilizations that are capable of communication.
# Value explanations
### Stars in galaxy
Stellur density correlates to about 494,925,397,747 stars in the milky way.
### Fraction of stars with habitable planets
59% of stars have a planet between 0.85 and 4 times earth and habitable
### Fraction of planets that develop life
~~Assuming a planet remains habitable for so long, there is a long time for simple life forms to develop.~~ <br/>
Odds of planet developing life 9:1 <a href="https://www.sciencedaily.com/releases/2020/05/200518162639.htm" target="_blank"><sup>[s]</sup></a>
### Fraction of planets with life that develop intelligence
Of species including but not limited to (amphibians, reptiles, birds, etc), About 47% of these are considered intelligent. <br/>
New study I read states odds ratio is 3:2
### Fraction of planets that develop communication
About 2% of the intelligent species calculated to be primates. If intelligent enough, could communicate in space (0.2%).
### Average lifespan of habitable planets
Earth's total habitable time is 7.79 billion years, we can assume this is the average. <br/>
(further reading I've found planets can be in habitable zones for 10 billion years) <br/>
### Time a civilization can communicate
Assuming humans will go extinct by 2149 from high carbon dioxide and increased temperatures, that would be 175 years from the arecibo message. <br/>
We can just assume that intelligence was at 1970, this will be about 180 years before extinction. <br/>
Assuming these alien civilizations aren't overpopulated and more intelligent, we can put this value at about 1,080;
# Detecting & contacting aliens. Why we might never contact aliens
Radio waves will continue forever, after a certain point they will be impossible to decode due to the inverse square law.
### Radio waves / Decibels per milliwatt
A way of calculating radio waves strength is with dBm, where 0 db corresponds to 1 milliwatt. <br/>
So 10 dBm would be 10 milliwatt and 20 dBm would be 100 milliwatt <br/>
You can convert milliwatts to dBm with 10 * log10(P) <br/>
<a href="https://en.wikipedia.org/wiki/DBm">Here is an interesting wikipedia page to understand dBm more and additional information</a>
### Calculating how long radio waves can be decoded
Using the following formula, we can calculate how many dBm a radio wave is at a current distance <br/>
![](radio-waves-decay.png) <br/>
Radio waves will become impossible to decode once the dBm reaches -192.5 dBm (thermal noise floor in space) <br/>
If we set P to 100,000,000 milliwatts (FM radio stations), these signals will be unreadable within 0.0045 lightyears (around 40 hours).
