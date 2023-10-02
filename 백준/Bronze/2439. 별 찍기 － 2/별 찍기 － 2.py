count = int(input())
string = ''


for v in range(1, count+1):
    # print(' ' * v-len(count)-1)
    print(' ' * (count - v) + '*' * v)