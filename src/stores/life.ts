import { defineStore } from 'pinia'

export const useLife = defineStore({
	id: 'life',
	state: () => ({
		born: null,
		died: null,
		last_visited: null,
		thirst: 2000,
		hunger: 9550,
		stuffing: 0,
		hygiene: 2000,
		addiction: 2000, 
		age: 1,
		loneliness: 300,
		boredom: 1000,
		sanity: 5000,
		dead: 0,
		comment: 'Kolejny niewinny słodziak na tym świecie.',
  	}),
  	getters: {
   		getThirst: (state) => state.thirst,
  		getHunger: (state) => state.hunger,
  		getStuffing: (state) => state.stuffing,
  		getHygiene: (state) => state.hygiene,
  		getAddiction: (state) => state.addiction,
  		getAge: (state) => state.age,
  		getLoneliness: (state) => state.loneliness,
  		getBoredom: (state) => state.boredom,
    	getSanity: (state) => state.sanity,
  		getComment: (state) => state.comment,
  		isDead: (state) => state.dead
  	},
	actions: {
		name(name) {
		  this.name = name
		},
		feed(value) {
			var newHunger = this.hunger - value
			if(this.dead == 1){
		  	this.comment = 'Pierwsze: zombie jedzą tylko mózgi... Drugie: nie stać Cię na nekromantę.'
		  }
			else if(newHunger > 9000){
		  	this.hunger -=value
		  	this.comment = 'Wpiernicza tą brukselke, aż mu się uszy trzęsą!'
		  }
		  else if(newHunger < 9000 && newHunger > 3500){
		  	this.hunger -=value
		  	this.comment = 'Tak znów z tym pasztetem!'
		  }
		  else if(newHunger < 3500 && newHunger > 1500){
		  	this.hunger -=value
		  	this.comment = 'KOSMO-KEBAB: Niebo w gębie... Piekło w dupie!'
		  }
		  else if(newHunger < 1500 && newHunger > 0){
		  	this.hunger -=value
		  	this.comment = 'APETYTER... By niejadek zjadł nawet gów**!'
		  }
		  else{
		  	this.hunger = 0
		  	this.comment = 'Widzę, że babcie też grają w naszą grę... Już wkrótce symulator karmienia wnuczka 3000!'
		  }

		  this.stuffing += value
		  this.loneliness - 5 > 0 ? this.loneliness-=5 : this.loneliness = 0 
		},
		hydrate(value) {
			var newThirst = this.thirst - value
			if(this.dead == 1){
		  	this.comment = 'O widzę hodowca pieczarek! No grunt to dobry nawóz ;- ).'
		  }
			else if(newThirst > 10000 && newThirst < 8000){
		  	this.comment = 'Ale się przyssał... Przecież to tylko woda.'
		  }
		  else{
		  	this.comment = 'Ze mną się nie napijesz ?!'
		  }
		  this.thirst - value > 0 ? this.thirst-=value : this.thirst = 0
		  this.loneliness - 5 > 0 ? this.loneliness-=5 : this.loneliness = 0
		},
		shit(value) {
			var newStuffing = this.stuffing -= value
			if(this.dead == 1){
		  	this.comment = 'To Tamagotchi a nie Kopi Luwak! Nic tam nie znajdziesz a na pewno nic cennego.'
		  }
			else if(newStuffing < 10000 && newStuffing > 4000){
		  	this.comment = 'Ale się scapił! AHTUNG Panzerabwehrmine!'
		  }
			else if(newStuffing < 4000 && newStuffing> 2000){
		  	this.comment = 'W dzisiejszym losowaniu multilotka....'
		  }
			else if(newStuffing < 2000 && newStuffing > 1000){
		  	this.comment = 'Chocapic! Czekoladowa pycha!'
		  }
			else if(newStuffing < 1000 && newStuffing > 0){
		  	this.comment = 'MAMO JA CHCE U TOMKA!'
		  }
		  else{
		  	this.comment = 'Do trąbki to temu daleko.'
		  }
		  this.stuffing - value > 0 ? this.stuffing-=value : this.stuffing = 0
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		  this.hygiene - 50 > 0 ? this.hygiene-=50 : this.hygiene = 0
		},
		wash(value) {
		  this.hygiene + 100 > 0 ? this.hygiene+=100 : this.hygiene = 10000 
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		inject(value) {
		  this.addiction - 100 > 0 ? this.addiction-=100 : this.addiction = 0
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		pat(value) {
			var newLoneliness = this.loneliness -= value
			if(this.dead == 1){
		  	this.comment = 'Maskotka lepiej by sie sprawdziła... i nie przyciągałaby much.'
		  }
			else if(newLoneliness < 1000 && newLoneliness > 800){
		  	this.comment = ''
		  }
			else if(newLoneliness < 800 && newLoneliness> 600){
		  	this.comment = ''
		  }
			else if(newLoneliness < 600 && newLoneliness > 300){
		  	this.comment = ''
		  }
			else if(newLoneliness < 300 && newLoneliness > 0){
		  	this.comment = ''
		  }
		  else{
		  	this.comment = 'WEŹ SIĘ TATO!'
		  }

		  this.loneliness - 40 > 0 ? this.loneliness-=40 : this.loneliness = 0
		  this.boredom - 40 > 0 ? this.boredom-=40 : this.boredom = 0 
		},		
		playBrutalGames(value) {

			if(this.dead == 1){
		  	this.comment = 'Widzisz, wreszcie udało Ci się wygrać z nim w tą gre! Jesteś pewnie z siebie dumny :- )'
		  }
		  else{
		  	this.comment = 'Jak zawsze dostajesz od zwierzaka łomot na multi...'
		  }
		  
		  this.loneliness - 20 > 0 ? this.loneliness-=20 : this.loneliness = 0
		  this.boredom - 100 > 0 ? this.boredom-=100 : this.boredom = 0 
		},	
		playUnicornGames(value) {

			if(this.dead == 1){
		  	this.comment = 'Sercowy miś i przyjaciele pytali się cały dzień o Twojego kompana...'
		  }
		  else{
		  	this.comment = 'Jednorożce, Tęczę i sercowe przygody... nudy na pudy, ale przynajmniej nie przegrywasz...'
		  }

		  this.loneliness - 20 > 0 ? this.loneliness-=20 : this.loneliness = 0
		  this.boredom - 100 > 0 ? this.boredom-=100 : this.boredom = 0 
		},
		putInCloset(value) {

			var newLoneliness = this.loneliness += value

			if(this.dead == 1){
		  	this.comment = 'Prawie jak w filmie "Obecność"... Dom zbudowany na cmentarzysku Tamagotchi!'
		  }
			else if(newLoneliness > 900){
		  	this.comment = 'Widzę lubisz zabawy w Josefa Fritzla...'
		  }
			else if(newLoneliness < 900){
		  	this.comment = 'Ciekawe czy też dostanie zaproszenie do Hogwartu...'
		  }
		  newLoneliness < 1000 ? this.loneliness+=value : this.loneliness = 1000
		},
		makeOlder(value) {
		  this.age + value < 10000 ? this.age +=value : this.age = 10000 
		},
		makeMoreHungry(value) {
			var newHunger = this.hunger + value
			if(newHunger < 10000 && newHunger > 4000){
		  	this.comment = 'Odchudzanie... może grubas zmieści się w te ubrania po ostatnim potworku, którego wychowywałeś...'
		  }
		  else if(newHunger < 10000){
		  }
		  else{
		  	this.comment = '[ŚMIERĆ] Popatrz na to z jasnej strony, przynajmniej z głodu sie nie zesra...'
		  	this.dead = 1
		  }

		  this.hunger + value < 10000 ? this.hunger+=value : this.hunger = 10000
		},
		makeMoreThirsty(value) {
		  var newThirst = this.thirst + value 
		  if(newThirst < 10000 && newThirst > 4000){
		  	this.thirst +=value
		  	//Można dać arrraya i random text z niego, póki co niech będzie jeden
		  	this.comment = 'Myślisz że jak nie dasz mu wody to wyewoluuje w wielbłąda... Sprytnie! Ciekawe jaki będzie tego finał...'
		  }
		  else if(newThirst < 10000){
		  	
		  }
		  else{
		  	this.comment = '[ŚMIERĆ] Wygląda jak ofiara suchego dowcipu...'
		  	this.dead = 1
		  }

		  this.thirst + value < 10000 ? this.thirst+=value : this.thirst = 10000
		},
		makeMoreStuffy(value) {
		  this.stuffing + value < 10000 ? this.stuffing +=value : this.stuffing = 10000 
		},
		makeMoreDirty(value) {
		  this.hygiene - value > 0 ? this.hygiene -=value : this.hygiene = 0 
		},
		makeMoreAddicted(value) {
		  this.addiction + value < 10000 ? this.addiction +=value : this.addiction = 10000 
		},
		makeMoreLonely(value) {
		  var newLonelines = this.loneliness + value 
		  if(newLonelines < 1000 && newLonelines > 500){

		  	this.comment = 'Twój pupil zaczął ubierać się jak EMO. Naaah na pewno nie brakuje mu Twojej uwagi! ;- )'
		  }
		  else if(newLonelines < 1000){
		  	
		  }
		  else{
		  	this.comment = '[ŚMIERĆ] Powiesił się.. zostawił list pożegnalny o treści: "(¬⌓¬).I."'
		  	this.dead = 1
		  }
		  newLonelines < 1000 ? this.loneliness +=value : this.loneliness = 1000
		},		
		makeMoreBored(value) {
		  this.boredom + value < 10000 ? this.boredom +=value : this.boredom = 10000
		},		
	}
})