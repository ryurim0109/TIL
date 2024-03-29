## 🍄 스레드

## `프로세스가 뭔가요?`

**프로세스는 운영체제로부터 자원을 할당받은 작업의 단위입니다.**
- 프로그램이 실행되는 순간 활동하기 위한 무대를 프로세스라고 할 수 있습니다.

## `스레드가 뭔가요?`

**스레드는 프로세스가 할당받은 자원을 이용하는 실행 흐름의 단위입니다.**
- 예를 들어, 브라우저를 프로세스라고 생각하면 블로그 글 작성하는 스레드1, 유튜브 영상 틀어놓기 스레드2로 생각할 수 있습니다.
- 각각의 스레드는 독립적인 작업을 수행해야하기 때문에 고유한 스레드 ID, 프로그램 카운터, 레지스터 집합, 스택을 갖고 있습니다.

## `프로세스와 스레드는 어떤 차이가 있나요?`

프로세스와 스레드는 개념의 범위부터 다릅니다. 스레드는 프로세스 안에 포함되어 있기 때문입니다.

프로세스는 프로그램을 실행하는 순간 해당 파일이 컴퓨터 메모리에 올라가게 되고, 이 동적인 상태의 프로그램을 프로세스라고 합니다.

스레드는 프로세스를 구성하는 더 작은 실행 단위의 개념입니다.

**프로세스는 메모리에 올라갈 때 운영체제로부터 독자적인 시스템 자원을 할당 받는 반면, 스레드는 프로세스 내부에서 다른 메모리 영역을 같은 프로세스 내 다른 스레드와 공유합니다.**

## ✅ javascript는 싱글 스레드 언어인데, 싱글 스레드 언어의 특징에 대해 설명해보세요.

### `싱글스레드란?`

**프로그램 내의 처리 실행 단위 혹은 CPU의 이용 단위를 스레드(Thread)라고 합니다. 이 때, 일련의 처리를 단일 스레드만을 직렬 처리하는 프로그래밍 방법을 싱글 스레드 프로그래밍(Single Thread Programming)이라고 합니다. 즉, 한 번에 하나의 일만 수행할 수 있는 것입니다.**

### `싱글스레드 장점`

**1️⃣ 문맥교환(context switch)이 발생하지 않아 오버헤드가 발생하지 않습니다.**

     🧐 문맥 교환: 하나의 프로세스가 CPU를 사용 중인 상태에서 다른 프로세스가 CPU를 사용하도록 하기 위해, 이전의 프로세스의 상태(문맥)를 보관하고 새로운 프로세스의 상태를 적재하는 작업

     🧐 오버 헤드: 문맥 교환 시간을 의미

**2️⃣ 스레드 간 자원 공유가 없기 때문에 그에 대한 동기화에 대해 신경쓰지 않아도 됩니다.**
- 여러 개의 스레드가 프로세스의 자원을 공유할 경우, 각 스레드가 원하는 결과를 얻게 하려면 공용 자원에 대한 접근을 제어해야 합니다. 
-  쉽게 말해서, 모든 스레드가 일정 자원에 동시에 접근하거나, 똑같은 작업을 실행하려는 경우,에러가 발생하거나 원하는 값이 나오지 않습니다. 
- 그래서, 스레드들이 동시에 같은 자원에 접근하지 못하도록 제어해줘야만 합니다. 이 작업은 프로그래머에게 많은 노력을 요구하고 비용을 발생시킵니다.

**3️⃣ 단순히 CPU만을 사용하는 계산작업이라면,오히려 멀티스레드보다 싱글스레드로 프로그래밍하는 것이 더 효율적입니다.**

🌱 두 개의 작업을 하나의 스레드로 처리하는 경우

☘️ 두 개의 스레드로 처리하는 경우 b의 경우

☘️ 의 경우는 짧은 시간 동안 2개의 스레드가 번갈아가면서 작업을 수행합니다. 그래서 동시에 두 작업이 처리되는 것과 같이 느끼게 됩니다.
하지만, 오히려 두 개의 스레드로 작업한 시간이 싱글스레드로 작업한 시간보다 더 걸릴 수도 있는데, 그 이유는 스레드 간의 작업전환(context switching)에 시간이 걸리기 때문입니다.

### `싱글스레드 단점`

**1️⃣ 연산량이 많은 작업을 하는 경우, 그 작업이 완료되어야 다른 작업을 수행할 수 있습니다.**

**2️⃣ 싱글 스레드 모델은 에러 처리를 못하는 경우 멈춥니다.**
- 멀티 스레드 모델은 에러 발생 시 새로운 스레드를 생성하여 극복합니다. 
- 다만, 새로운 스레드 생성이나 놀고 있는 스레드 처리에 비용이 발생합니다.

### `자바스크립트는 싱글 스레드로 채택된 이유`

- 자바스크립트는 원래 웹페이지의 보조적인 기능을 수행하려고 만들어진 언어입니다. 
- 멀티 스레드인 자바는 다소 무겁고 어렵다는 인식도 있고 동시성 문제가 있다보니, 복잡한 시나리오를 신경쓸 필요 없는 싱글 스레드 형식이 채택되었습니다.


### ❓ 동시성(Concurrency)
물리학에서 서로 다른 사건이 동시에 일어나는 현상

- 한 cpu에서 동시에 여러 작업을 하는 것처럼 보이게 만드는 것입니다.
- 동시에 실행되는 것 같이 보이는 것입니다.
- 싱글 코어에서 멀티 쓰레드를 동작 시키는 방식입니다.
- 한 번에 많은 것을 처리합니다.
- 논리적인 개념입니다.
- concurrently ⭕ simultaneously ❌
- concurrently : N 개의 task 의 실행 시간이 타임라인 상에서 겹칠 수 있습니다.
- simultaneously : 우리가 일반적으로 사용하는 ’동시에’ 라는 단어의 맥락
- (ex) 한 cpu에서 2개의 process가 있을경우,
이 두 프로세스는 매우 짧은 시간동안 context switching이 일어나면서 번갈아서 실행됩니다.
- 사람 눈으로 볼 때 👉 동시에 동작하는 것처럼 보입니다.


## `멀티 스레드`
프로그램을 다수의 실행 단위로 나누어 실행합니다.

프로세스 내에서 자원을 공유하여 자원 생성과 관리의 중복을 최소화하고,

서버가 많은 요청을 효율적으로 수행할 수 있는 환경을 제공합니다.

각각의 스레드가 고유의 레지스터와 스택으로 표현됩니다.

### `멀티 스레드의 장점`
새로운 프로세스를 생성하는 것보다 기존 프로세스에서 스레드를 생성하는 것이 빠릅니다.

프로세스의 자원과 상태를 공유하여 효율적으로 운영이 가능합니다.

프로세스의 작업전환보다 스레드의 작업전환이 더 빠릅니다.

### `멀티 스레드의 단점`
하나의 스레드만 실행중일 때는 실행시간이 오히려 지연될 수 있습니다.

멀티 스레딩을 위해 운영체제의 지원이 필요합니다.

스레드 스케쥴링을 신경써야 합니다.