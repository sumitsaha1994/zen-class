with open('day3_class/sample.txt', 'w+') as f:
    f.write("this is a sample text from code file.py")
    print(f.read())

with open('day3_class/sample.txt', 'a') as f:
    f.write("\nAdded another line")
