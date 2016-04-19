
    var health = 100;
    
  var healthElem = document.getElementById("health-bar")
  
  var items = {
    shield:new Item("shield",0.3,"This greedy guy, just gained approval for budget cuts"),
    armor:new Item("armor",0.4,"Gerry-mandering gave him a possible spot in the senate!"),
    sword:new Item("sword", 0.5, "He passed anti abortion laws"),
    potion:new Item("potion", 0.7,"possesion of marijuana is now a felony"),
  }
updateHealth()
function tatUp() {
    var damage = -1;
    health = health + (damage.;

    updateHealth()
}
function kick() {
    var damage = -10;
    health = health + damage;

    updateHealth()
}
function fire() {
    var damage = -15;
    health = health + damage;


    updateHealth()

}
function zomb() {
    var damage = -25;
    health = health + damage;


    updateHealth()

}
function stab() {
    var damage = -20;
    health = health + damage;

    updateHealth()
}




function updateHealth() {
  
    healthElem.style.width = health + "%";
    if (health <= 0) {
        alert(' Good job!, you have started the everyman movement, if you would like to play again press reset');
    }
}
function reset() {
health = 100;
updateHealth();

     
}
function Item (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
     document.getElemById("player-items")
    }
}
 updateHealth() 
