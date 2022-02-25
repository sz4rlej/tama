import { defineStore } from 'pinia'

export const useLife = defineStore({
	id: 'life',
	state: () => ({
		thirst: 2000,
    	hunger: 10000,
    	stuffing: 0,
    	hygiene: 2000,
    	addiction: 2000, 
    	age: 1,
    	loneliness: 1000,
    	boredom: 1000,
  	}),
  	getters: {
   		getThirst: (state) => state.thirst,
  		getHunger: (state) => state.hunger,
  		getStuffing: (state) => state.stuffing,
  		getHygiene: (state) => state.hygiene,
  		getAddiction: (state) => state.addiction,
  		getAge: (state) => state.age,
  		getLoneliness: (state) => state.loneliness,
  		getBoredom: (state) => state.boredom
  	},
	actions: {
		name(name) {
		  this.name = name
		},
		feed() {
		  this.hunger-= 100,
		  this.loneliness-= 10,
		},
		hydrate() {
		  this.thirst-= 100,
		  this.loneliness-= 10,
		},
		shit() {
		  this.stuffing-= 100,
		  this.loneliness-= 10,
		},
		wash() {
		  this.hygiene-= 100,
		  this.loneliness-= 10,
		},
		inject() {
		  this.addiction-= 200,
		  this.loneliness-= 10,
		},
		pat() {
		  this.loneliness-= 40,
		  this.boredom-= 40
		},		
		playBrutalGames() {
		  this.loneliness-= 20,
		  this.boredom-= 100
		},	
		playUnicornGames() {
		  this.loneliness-= 20,
		  this.boredom-= 100
		},	
	}
})