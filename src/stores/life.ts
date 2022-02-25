import { defineStore } from 'pinia'

export const useLife = defineStore({
	id: 'life',
	state: () => ({
		born: null,
		died: null,
		last_visited: null,
		thirst: 2000,
    	hunger: 10000,
    	stuffing: 0,
    	hygiene: 2000,
    	addiction: 2000, 
    	age: 1,
    	loneliness: 1000,
    	boredom: 1000,
    	dead: 0,
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
  		isDead: (state) => state.dead
  	},
	actions: {
		name(name) {
		  this.name = name
		},
		feed() {
		  this.hunger-= 100
		  this.loneliness-= 10
		},
		hydrate() {
		  this.thirst-= 100
		  this.loneliness-= 10
		},
		shit() {
		  this.stuffing-= 100
		  this.loneliness-= 10
		},
		wash() {
		  this.hygiene+= 100
		  this.loneliness-= 10
		},
		inject() {
		  this.addiction-= 200
		  this.loneliness-= 10
		},
		pat() {
		  this.loneliness-= 40
		  this.boredom-= 40
		},		
		playBrutalGames() {
		  this.loneliness-= 20
		  this.boredom-= 100
		},	
		playUnicornGames() {
		  this.loneliness-= 20
		  this.boredom-= 100
		},
		makeOlder(value) {
		  this.age+= value
		},
		makeMoreHungry(value) {
		  this.hunger+= value
		},
		makeLessHydrated(value) {
		  this.thirst-= value
		},
		makeMoreStuffy(value) {
		  this.stuffing+= value
		},
		makeMoreDirty(value) {
		  this.hygiene-= value
		},
		makeMoreAddicted(value) {
		  this.addiction+= value
		},
		makeMoreLonely(value) {
		  this.loneliness+= value
		},		
		makeMoreBored(value) {
		  this.boredom+= value
		},		
	}
})