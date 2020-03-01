num_list = [x for x in input().split(' ')]
new_list = []
for num in num_list:
	if new_list.count(num) == 0:
    	new_list.append(num)
output = ''
for item in new_list:
	output += item + ' '
print(output.strip())

#input_text = input()
#a, b = int(input_text.split(' ')[0]), int(input_text.split(' ')[1])
# arr = [int(x) for x in input().split(' ')]

# arr_set = set(arr)
# d = {}
# print(arr_set)
# for a in arr_set:
#     d[str(a)] = arr.count(a)
# d_sorted =  sorted(d, key = lambda x: d[x])

# output = ''
# for item in d_sorted:
# 	output += item + ' '

# print(output.strip())

