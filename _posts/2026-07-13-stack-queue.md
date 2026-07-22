---
title: "[자료구조] 스택 · 큐 (Stack · Queue)"
date: 2026-07-13T00:00:00+09:00
categories: ["💻 코딩테스트", "📖 이론"]
tags: ["Data Structure", "Stack", "Queue", "DFS", "BFS"]
description: "코딩테스트, 자료구조, 큐, 스택, DFS, BFS, 프로그래머스, 백준, Github, 개발블로그"
---

# 자료구조 - 스택(Stack)과 큐(Queue)

## 자료구조란?

> **자료구조(Data Structure)** 는 데이터를 효율적으로 **저장하고 관리하기 위한 구조**를 의미한다.

프로그램에서 데이터를 어떻게 저장하고 꺼내느냐에 따라 성능과 구현 방식이 달라지므로, 자료구조는 알고리즘과 함께 가장 기본이 되는 개념이다.

---

# 스택(Stack)

스택(Stack)은 **후입선출(LIFO, Last In First Out)** 구조를 가지는 자료구조이다.

즉, **가장 마지막에 들어온 데이터가 가장 먼저 나온다.**

예를 들어 책을 쌓아 올렸을 때 가장 위에 올린 책을 먼저 꺼내는 것과 같은 원리이다.

### 특징

- 후입선출(LIFO) 구조
- 파이썬에서는 **기본 리스트(List)** 만으로 구현 가능
- 별도의 라이브러리가 필요하지 않음

### 핵심 메서드

| 메서드 | 설명 |
| ------- | ---- |
| `append(x)` | 데이터 삽입 |
| `pop()` | 마지막 데이터 삭제 및 반환 |

### 예제

```python
stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print(stack)

stack.pop()

print(stack)
```

**실행 결과**

```text
[10, 20, 30]
[10, 20]
```

### 스택 출력

스택은 **맨 위의 원소부터 확인하는 것이 일반적**이므로 출력할 때는 뒤에서부터 확인하면 스택의 의미를 더욱 잘 나타낼 수 있다.

---

# 큐(Queue)

큐(Queue)는 **선입선출(FIFO, First In First Out)** 구조를 가지는 자료구조이다.

즉, **가장 먼저 들어온 데이터가 가장 먼저 나온다.**

은행 번호표나 줄 서기를 생각하면 이해하기 쉽다.

### 특징

- 선입선출(FIFO) 구조
- 파이썬에서는 `collections` 모듈의 `deque`를 사용하는 것이 가장 효율적이다.
- `list`로도 구현할 수 있지만 앞에서 데이터를 삭제하는 연산의 성능이 좋지 않다.

### deque란?

`deque(Double Ended Queue)`는 **양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조**이다.

- 스택처럼 사용할 수도 있고,
- 큐처럼 사용할 수도 있다.
- 필요하다면 `list(queue)`를 통해 리스트로 변환할 수도 있다.

### 핵심 메서드

| 메서드 | 설명 |
| ------- | ---- |
| `append(x)` | 데이터 삽입 |
| `popleft()` | 가장 앞의 데이터 삭제 및 반환 |

### 예제

```python
from collections import deque

queue = deque()

queue.append(10)
queue.append(20)
queue.append(30)

print(queue)

queue.popleft()

print(queue)
```

**실행 결과**

```text
deque([10, 20, 30])
deque([20, 30])
```

리스트 형태로 보고 싶다면 다음과 같이 변환할 수 있다.

```python
print(list(queue))
```

---

# 스택과 큐 비교

| 구분 | 스택(Stack) | 큐(Queue) |
| ---- | ----------- | ---------- |
| 구조 | 후입선출(LIFO) | 선입선출(FIFO) |
| 삽입 | `append()` | `append()` |
| 삭제 | `pop()` | `popleft()` |
| 구현 | `list` | `collections.deque` |

---

# 정리

- **스택(Stack)** 은 **후입선출(LIFO)** 구조이다.
- **큐(Queue)** 는 **선입선출(FIFO)** 구조이다.
- 스택은 **파이썬의 기본 리스트(List)** 만으로 구현할 수 있다.
- 큐는 **`collections.deque`** 를 사용하는 것이 가장 효율적이다.
- 두 자료구조 모두 **삽입과 삭제**를 중심으로 동작하는 가장 기초적인 자료구조이며, 다양한 알고리즘의 기반이 된다.
