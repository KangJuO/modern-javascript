## **1. 테스트가 필요한 이유**

- 개발 중 수동으로 작성한 코드를 계속 재실행하는 것은 불완전함
- ex) test라는 함수 구현중 test(1)은 정상 test(2)는 비정상, 수정작업 후 test(2) 정상
- 위의 경우 test(1)을 다시 테스트 하지 않아 버그가 발생할 수 있음

## **2. Behavior Driven Development(BDD)**

- 테스트, 문서, 예시를 한데 모아놓은 개념
- 코드 작성전 : 코드의 역할을 생각하며 자연어로 표현
- 이때, 만들어진 산출물을 BDD에선 명세서(specification) 또는 스펙(spec) 이라고 함
- 명세서엔 유스 케이스에 대한 자세한 설명과 테스트가 담겨있음
- 예시 : x를 n번 곱해주는 함수, pow(x, n)를 구현하고 있다고 가정

### **1. 개발순서**

- 명세서 초안을 작성합니다. 초안엔 기본적인 테스트도 들어갑니다.
- 명세서 초안을 보고 코드를 작성합니다.
- 코드가 작동하는지 확인하기 위해 Mocha라 불리는 테스트 프레임워크를 사용해 명세서를 실행합니다.
- 코드가 잘못 작성되었다면 에러가 출력됩니다. 개발자는 테스트를 모두 통과해 에러가 더는 출력되지 않을 때까지 코드를 수정합니다.
- 모든 테스트를 통과하는 코드 초안이 완성되었습니다.
- 명세서에 지금까진 고려하지 않았던 유스케이스 몇 가지를 추가합니다. 테스트가 실패하기 시작할 겁니다.
- 세 번째 단계로 돌아가 테스트를 모두 통과할 때까지 코드를 수정합니다.
- 기능이 완성될 때까지 3~6단계를 반복합니다.

### **2. 스펙의 구성요소**

- describe("title", function(){...})
  - 구현하고자하는 기능에 대한 설명 => pow function이 어떤 일을 하는지
  - it 블록을 모아주는 역할
- it("유스 케이스 설명", function(){...})
  - 특정 유스케이스에 대한 설명
  - 유스 케이스 테스트 함수
- assert.equal(value1, value2)
  - pow function이 제대로 동작하는지 확인
  - 다른것도 많이 있음

### **3. 스펙의 실행**

- Mocha : 핵심 테스트 프레임워크로, describe, it과 같은 테스팅 함수와 테스트 실행 관련 주요 함수를 제공
- Chai : 다양한 assertion을 제공해 주는 라이브러리
- 테스트 하나에선 하나만 확인하기

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 결과 출력에 사용되는 mocha css를 불러옵니다. -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css"
    />
    <!-- Mocha 프레임워크 코드를 불러옵니다. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script>
      mocha.setup("bdd"); // 기본 셋업
    </script>
    <!-- chai를 불러옵니다 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
      // chai의 다양한 기능 중, assert를 전역에 선언합니다.
      let assert = chai.assert;
    </script>
  </head>

  <body>
    <script>
      function pow(x, n) {
        /* 코드를 여기에 작성합니다. 지금은 빈칸으로 남겨두었습니다. */
      }
    </script>

    <!-- 테스트(describe, it...)가 있는 스크립트를 불러옵니다. -->
    <script src="test.js"></script>

    <!-- 테스트 결과를 id가 "mocha"인 요소에 출력하도록 합니다.-->
    <div id="mocha"></div>

    <!-- 테스트를 실행합니다! -->
    <script>
      mocha.run();
    </script>
  </body>
</html>
```

## **3. 정리**

- BDD에선 스펙을 먼저 작성하고 난 후에 구현을 시작, 구현이 종료된 시점에는 스펙과 코드 둘 다 확보가능
- 스펙의 용도
  - 테스트 : 함수가 의도하는 동작을 제대로 수행하고 있는지 보장함
  - 문서 : 함수가 어떤 동작을 수행하고 있는지 설명해줌. describe와 it에 설명이 들어감
  - 예시 : 실제 동작하는 예시를 이용해 함수를 어떻게 사용할 수 있는지 알려줌
