while True:
    input_text = input("Enter a value\nexter Q or quit to stop\n")
    if input_text.lower() == 'q' or input_text.lower() == 'quit':
        break
    print("you have entered {}".format(input_text))

