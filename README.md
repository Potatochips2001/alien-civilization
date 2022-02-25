# alien-civilization
This is a formula I made to calculate the active alien civilizations that are capable of communication.
# Value explanations
### Galaxy sizes
Milky way is 260,000 ly in diameter & 2,000 ly high, and the dark matter halo is 1.9 million ly.<a href="https://www.dailymail.co.uk/sciencetech/article-8146523/Milky-Way-extends-1-9-MILLION-light-years-thanks-dark-matter.html"><sup>[s]</sup></a> <br/>
Andromeda is 220,000 ly in diameter & 2,600 ly high, the halo is 1,389,426 ly. <a href="https://arxiv.org/abs/1208.5712"><sup>[s]</sup></a>
### Fraction of stars with habitable planets
59% of stars have a planet between 0.85 and 4 times earth and habitable
### Fraction of planets that develop life
~~Assuming a planet remains habitable for so long, there is a long time for simple life forms to develop.~~ <br/>
Odds of planet developing life in goldilock zone 9:1 <a href="https://www.sciencedaily.com/releases/2020/05/200518162639.htm" target="_blank"><sup>[s]</sup></a> <br/>
### Fraction of planets with life that develop intelligence
~~Of species including but not limited to (amphibians, reptiles, birds, etc), About 47% of these are considered intelligent.~~ <br/>
New study I read states odds ratio is 3:2
### Fraction of planets that develop communication
Humans are 0.015% of animals; great apes are 0.077% of species.
### Average lifespan of habitable planets
Earth's total habitable time is 7.79 billion years, we can assume this is the average. <br/>
(further reading I've found planets can be in habitable zones for 10 billion years) <br/>
We can set this to 1 billion years assuming a planet has to be 5 billion years old to start developing intelligent life, and life takes 1 billion years to completely evolve.
### Time a civilization can communicate
We can estimate the time an alien civilization would last based off how long human civilization would last. <br/>
CO<sub>2</sub> levels are 419 as of 2022, exponential growth rate of CO<sub>2</sub> is 0.75%, crops can't grow after CO<sub>2</sub> levels reach 1,500 ppm,
crops begin to die after 2,000 ppm. Without crops, humans would die off after 60 days. <br/>
This results in human extinction in 2193 (223 years after technology developing) <br/>
Assuming that they aren't overpopulated like humans and are more likely intelligent, longer lasting civilizations would be more common, about ten times more than us is 2,230 years.
<br/> (The ideal human population is 2.3 billion) <br/>
Harvesting energy or dumping waste from nearby planets could increase the time a civilization can communicate. So multiplying the years by planets could be useful.
### Density
Maximum distance between two points formula: ![](maximum-distance.png)
<br/>Then just divide by number of civilizations.
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
# Artificial lights from proxima b
James webb telescope has said to possibly detect artificial lights when it launches.
### Detecting how far we can detect artificial lights
The minimum watts detectable to the human eye is 3.58e-18 <br/>
If artificial lights can produce ~100 billion watts of light, the inverse square law returns 6.2e-23, which is below human eye detection
### Telescopes
The hubble telescope focal length is 57.6 meters, the cornea of human eye is 11 mm in diameter <br/>
we can calculate the magnification power with this (57.6 / 0.011) = 5,236; multiply 6.2e-23 * 5,236 would still not pass the human eye detection <br/>
The james webb has a focal length of 131.4 meters, 11,945 power (6.2e-23 * 11,945) = 7.4e-19, this would still not pass minimum eye detection. <br/>
It would take at least 483,055,713,400 watts to detect artificial lights. <br/>
### Civilization
In 1970 we were using about 10 billion energy, so we were a type 0.4 civilization (log10(P)-6)/(10) <br/>
A type 0.4 civilization is when we will consider aliens intelligent life that can communicate. <br/>
Any alien civilization from proxima b would have to be more advanced than us to detect them. <br/>
Using kardashev scale, this would be a type 0.568 civilization (we are a 0.5 type civilization). <br/>
The chances of detecting artificial lights from proxima b if there is life is 2% <br/>
(intelligence = 10 billion joules / minimum joules for detection 483,055,713,400) <br/>
If the chances of intelligent life on proxima b is 0.1%, 0.001 * 0.02 is around 0.002% chance of detecting artificial lights.
