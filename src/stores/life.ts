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
		  this.hunger - 100 > 0 ? this.hunger-=100 : this.hunger = 0 
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0 
		},
		hydrate() {
		  this.thirst - 100 > 0 ? this.thirst-=100 : this.thirst = 0 
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		shit() {
		  this.stuffing - 100 > 0 ? this.stuffing-=100 : this.stuffing = 0 
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		wash() {
		  this.hygiene + 100 > 0 ? this.hygiene+=100 : this.hygiene = 10000 
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		inject() {
		  this.addiction - 100 > 0 ? this.addiction-=100 : this.addiction = 0
		  this.loneliness - 10 > 0 ? this.loneliness-=10 : this.loneliness = 0
		},
		pat() {
		  this.loneliness - 40 > 0 ? this.loneliness-=40 : this.loneliness = 0
		  this.boredom - 40 > 0 ? this.boredom-=40 : this.boredom = 0 
		},		
		playBrutalGames() {
		  this.loneliness - 20 > 0 ? this.loneliness-=20 : this.loneliness = 0
		  this.boredom - 100 > 0 ? this.boredom-=100 : this.boredom = 0 
		},	
		playUnicornGames() {
		  this.loneliness - 20 > 0 ? this.loneliness-=20 : this.loneliness = 0
		  this.boredom - 100 > 0 ? this.boredom-=100 : this.boredom = 0 
		},
		makeOlder(value) {
		  this.age + value < 100 ? this.age +=value : this.age = 100 
		},
		makeMoreHungry(value) {
		  this.hunger + value < 10000 ? this.hunger +=value : this.hunger = 10000 
		},
		makeLessHydrated(value) {
		  this.thirst - value < 10000 ? this.thirst -=value : this.thirst = 10000 
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
		  this.loneliness + value < 10000 ? this.loneliness +=value : this.loneliness = 10000
		},		
		makeMoreBored(value) {
		  this.boredom + value < 10000 ? this.boredom +=value : this.boredom = 10000
		},		
	}
})