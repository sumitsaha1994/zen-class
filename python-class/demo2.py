list_nums = [int(i) for i in input().split(' ')]
diff = 15
list_output = []
for i in range(0, len(list_nums) - 1):
  if abs(list_nums[i] - list_nums[i+1]) > 15:
    list_output.append('1')
  else:
    list_output.append('0')
print(' '.join(list_output) + ' 0')

#1000 1000 2000 3000 5000