// câu 4 : xây dựng lớp Animal
function Animal(name,weight){
    this.name = name;
    this.weigh = weight;
    this.getName = function(newName){
        this.name = newName;
    }
    this.getWeiht= function(neWeight){
        this.weigh = neWeight;
    }
    this.toString = function(name,weight){
        this.toString = name + weight;
    }
    this.setName = function(newName){
        this.name = newName;
    }
    this.setWeight = function(newWeight){
        this.weigh = newWeight;
    }
}
let objAnimal1 = new Animal("Eliphant",45.6);
 console.log(objAnimal1.toString());
 let objAnimal2 = new Animal("lulu",20);
 objAnimal2.setName("Mouse");
 console.log(objAnimal2);






