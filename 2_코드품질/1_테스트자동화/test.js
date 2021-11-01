describe("일반적인 테스트", function () {
  it("2를 세 번 곱하면 8입니다.", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3을 네 번 곱하면 81입니다.", function () {
    assert.equal(pow(3, 4), 81);
  });
});

describe("for문을 사용한 테스트", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

describe("중첩 사용가능", function () {
  describe("x를 세 번 곱합니다.", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  describe("정수가 아닌 n", function () {
    it("n이 음수일 때 결과는 NaN입니다.", function () {
      assert.isNaN(pow(2, -1));
    });

    it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
      assert.isNaN(pow(2, 1.5));
    });
  });

  // describe와 it을 사용해 이 아래에 더 많은 테스트를 추가할 수 있습니다.
});
