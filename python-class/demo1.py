text = input()
num_list = [int(x) for x in text.split(' ')]
new_list = []
for i in range(0, len(num_list)):
	for j in range(i+1, len(num_list)):
		if num_list[j] < num_list[i]:
			new_list.append(num_list[j])
			break
	else:
		new_list.append(-1)

output = ''
for item in new_list:
	output += str(item) + ' '

print(output.strip())