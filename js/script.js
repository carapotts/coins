// JavaScript Document
onload = init;

function init(){
	//make an object based on the coin class:
	var coin1 = new Coin();
	coin1.create();	
	
	var coin2 = new Coin();
	coin2.create();	
	
	var coin3 = new Coin();
	coin3.create();	
	
	var coin4 = new Coin();
	coin4.create();	
	
	var coin5 = new Coin();
	coin5.create();	
}


//let's make a Class (blueprint) for each coin we generate
function Coin(){
	this.x;//starts empty, will keep track of each coins left and right position
	this.y;//starts empty, will keep track of each coins up and down position
	this.item_on_page;
	/**function does lots of things when a coin gets created*/
	this.create = function(){
		//make a section element in the html, store it into the item_on_page we set up above. 
		this.item_on_page = document.createElement("section");
		//store a random x and y position, different for each coin. I'm using screen width or 500, height of 300:
		this.x= Math.floor(Math.random()*500); 
		this.y= Math.floor(Math.random()*300);
		//use those x and y coordinates in the CSS to position the coins
		 this.item_on_page.style.left = this.x + "px";
		 this.item_on_page.style.left = this.y + "px";

		//attach the item to our html hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	
	/**function does lots of things when a coin is removed from page*/
	this.destroy = function(){
		
	}
}