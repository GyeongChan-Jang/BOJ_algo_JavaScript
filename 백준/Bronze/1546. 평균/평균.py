N = int(input())

scores = [int(v) for v in input().split()]

max = max(scores)

fakeScores = []

for v in scores:
    fakeScores.append((v / max) * 100)

print(sum(fakeScores)/len(fakeScores))