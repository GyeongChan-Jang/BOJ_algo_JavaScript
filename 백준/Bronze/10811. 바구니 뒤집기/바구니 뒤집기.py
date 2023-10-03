basketCount, reverseCount = map(int, input().split())
basketList = [v+1 for v in range(basketCount)]

for _ in range(reverseCount):
    start, end = map(int, input().split())
    temp = basketList[start-1:end]
    temp.reverse()
    basketList[start-1:end] = temp

print(*basketList)