#1 + 2 + 3 + 4 + 5 + ... + n  
def series1(n):
    print([i for i in range(1, n+1)])

# 1 2 3 6 9 18 27 54…
def series2(n):
    nums = [1, 2]
    if n==1:
        print(nums[0])
    elif n == 2:
        for n in nums:
            print(n, end=' ')
        print()
    else:
        for i in range(3, n+1):
            nums.append(nums[i - 3] * 3)
        print(nums)
#1 4 9 16 25 36 …. 
def series3(n):
    print([x ** 2 for x in range(1, n+1)])

#1 2 9 4 25 6 49…
def series4(n):
    print([x if x%2==0 else x **2 for x in range(1, n+1)])
#1 5 9 6 25 8 49….
def series5(n):
    if n == 1:
        print(1)
    elif n == 2:
        print([1, 2])
    elif n > 0:
        print([1, 5] + [x + 2 if x % 2 == 0 else x ** 2 for x in range(3, n+1)])
# 1 4 27 16 125 ….   
def series6(n):
    print([x**2 if x%2==0 else x**3 for x in range(1, n+1)])

series1(9)
series2(10)
series3(7)
series4(8)
series5(8)
series6(7)
