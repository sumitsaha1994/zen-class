import random as rand

number = int(rand.random() * 10)
guess = int(input("Enter numnber(int) between 1-10\n"))
count = 1
while count <= 5:
    if count > 1:
        guess = int(input("Try again\n"))   
    if guess == number:
        print("Cogratulations! You have guessed it right!!") 
        break
    elif guess > number:
        print("Too high")
    else:
        print("Too low")
    print("You have {} chances left".format(5 -count))
    count += 1
else:
    print("Game over!! You have lost all the chances")