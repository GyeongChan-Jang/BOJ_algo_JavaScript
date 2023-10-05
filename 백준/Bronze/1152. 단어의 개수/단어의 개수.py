string = input().split(' ')

count = string.count('')

for _ in range(count):
    string.remove('')
print(len(string))