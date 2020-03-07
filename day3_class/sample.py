number = input()

for ele in number: 
    if int(ele) % 2 == 0: 
        print ("list contains an even number")
        break
# This else executes only if break is NEVER 
# reached and loop terminated after all iterations. 
else:      
    print ("list does not contain an even number") 