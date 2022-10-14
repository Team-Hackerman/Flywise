This program returns a weight graph image, in base 64, given the parameters returned by the Cargo API

#APIs
There is one API, available as POST or GET
- http://localhost:8081/api/graph
The parameters are
- for the GET API, the double values of tow, zfw, law, fwdLimit, aftLimit, toCg, zfwCg, ldCg
ex:  tow=237262&zfw=169046&law=176645&fwdLimit=27.4&aftLimit=81.7&toCg=69.6&zfwCg=73.6&ldCg=74.2
- for the POST API, an object containing the same double values
ex: {"tow":237262,"zfw":169046,"law":176645,"fwdLimit":27.4,"aftLimit":81.7,"toCg":69.6,"zfwCg=73.6,"ldCg":74.2} 
