
#
# states = {"California": "CA", "Arizona": "AZ", "Arkansas": "AK"}
#
# for state in states:
#     print("State: " + state + "Abbreviation: " + states[state])
#
#

dog = {
    "name": "Dash",
    "breed": "Corgi",
    "age": 2,
    "hungry": True,
    "sleepy": False
}

#defines object
#2 underscores means that it is something that python should treat specially
#self is created by default to refer to a specific instance of a dog
class Dog(object): #dog is an object. Everything is an object. Objects are upper case.
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.is_hungry = True
        self.needs_a_walk = True
        self.is_sleepy = True
    def feed(self): #you always include the self in parameters when you define a function within the class def
        self.is_hungry = False
        print("Nomomomomomom")
        self.needs_a_walk = True
    def walk(self):
        if self.needs_a_walk == True and not self.is_sleepy:
            self.needs_a_walk = False
            self.is_sleepy = True
            print("Walkawalkawalkawalkawalka")
    def sleep(self):
        if self.is_sleepy == True and self.is_hungry == False:
            self.is_sleepy = False
            self.is_hungry = True
            print("ZZZZZZZZZ")
    def __str__(self): #returns the string of the class. Distinguishes differences.
        return ("Name: %s\nAge: %s " %(self.name, self.age))
    def play(self, other_dog):
        print("%s is playing with %s" %(self.name, other_dog.name))
dog1 = Dog("Dash", 2) #self is reference to the instance of the particular dog, dog1
#creates a new dog that has its own
dog2 = Dog("Buster", 1)

dog1.name = "Ruff" #can change properties of an object using dot notation
dog1.feed()
dog1.walk()
dog1.walk()
dog1.sleep()
dog1.feed()
dog1.walk()
dog1.sleep()
dog1.play(dog2)
#dot syntax means that you're accessing values inside of an object

print("%s is %s years old." %(dog1.name, dog1.age))
print(type(dog1)) #python knows that dog1 is a DOG class
print(dog1)
