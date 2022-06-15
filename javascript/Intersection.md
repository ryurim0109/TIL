## 🍄 Intersection Observer API 

- Intersection Observer은 target과 root의 교차 발생을 비동기적으로 관찰하는 Web API입니다.
- 타겟 엘레멘트와 타겟의 부모 혹은 상위 엘레멘트의 뷰포트가 교차되는 부분을 비동기적으로 관찰하는 API입니다.

        👩‍💻 뷰포인트 ❓ 
        현재 화면에 보여지고 있는 다각형(보통 직사각형)의 영역입니다.

## 🍄 스크롤 이벤트의 문제점

- scroll event를 사용해 infinite-scroll을 구현하려면 현재 스크롤이 위치한 높이값을 계속 읽어야 합니다. 
- 따라서 문제의 영상처럼 몇백번 몇천번동안 계속 값을 읽어오게 되는데 이게 브라우저의 Reflow를 야기할 수 있다고 합니다.
- 지속적으로 event를 호출하고 있는건 확실하기 때문에 성능상 치명적인것은 변함이 없습니다.
-  lodash 라이브러리의 debounce, throttle과 같은 메서드를 사용하면 이벤트 발생을 줄일 수 있습니다.

## 🍄 Intersection Observer API 적용

1. 페이지 스크롤 시 이미지를 Lazy loading할 때
2. Infinite scrolling을 통해 스크롤을 하며 새로운 콘텐츠를 불러올 때
3. 광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
4. 사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

## 🍄 Intersection Observer API 사용이유
1. debounce, throttle과 같은 메서드를 사용하지 않아도 됩니다.
2. 스크롤 이벤트에서는 현재의 높이 값을 알기 위해offsetTop 을 사용하는데 정확한 값을 가져오기 위해 매번 layout을 새로 그리게 됩니다.

    
        👩‍💻 layout을 새로 그린다는 것은 렌더 트리를 재생성한다는 뜻인데, reflow라고도 불리우는 이 일련의 과정이 반복되면 당연히 브라우저의 성능이 저하되고 화면의 버벅거림이 생길 수 밖에 없습니다.

