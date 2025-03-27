import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [euclidResult, setEuclidResult] = useState(null);
  const [euclidTableData, setEuclidTableData] = useState([]);
  const [error, setError] = useState('');

  const calculateGCD = () => {
    setError('');
    setResult(null);
    setTableData([]);

    const a1 = parseInt(num1, 10);
    const a2 = parseInt(num2, 10);

    if (!a1 || !a2 || a1 <= 0 || a2 <= 0) {
      setError('양의 정수 두 개를 입력하세요.');
      return;
    }

    // 큰 수를 첫번째, 작은 수를 두번째로 배정
    let first, second;
    if (a1 > a2) {
      first = a1;
      second = a2;
    } else {
      first = a2;
      second = a1;
    }

    // 1번 인덱스부터 사용 (0번 인덱스는 더미)
    let r = [];
    let q = [];
    let s = [];
    let t = [];
    r[1] = first;
    r[2] = second;
    q[1] = 0;
    s[1] = 1;
    s[2] = 0;
    t[1] = 0;
    t[2] = 1;

    let n = 1, d = 0;
    while (true) {
      q[n + 1] = Math.floor(r[n] / r[n + 1]);
      r[n + 2] = r[n] % r[n + 1];
      s[n + 2] = s[n] - q[n + 1] * s[n + 1];
      t[n + 2] = t[n] - q[n + 1] * t[n + 1];

      if (r[n + 2] === 0) {
        n++;
        r[n + 2] = 0;
        d = r[n];
        break;
      }
      n++;
    }

    let table = [];
    for (let k = 1; k <= n; k++) {
      table.push({
        iteration: k,
        q: q[k] !== undefined ? q[k] : 'N/A',
        r_n: r[k] !== undefined ? r[k] : 'N/A',
        r_n1: r[k + 1] !== undefined ? r[k + 1] : 'N/A',
        r_n2: r[k + 2] !== undefined ? r[k + 2] : 'N/A',
        s: s[k] !== undefined ? s[k] : 'N/A',
        t: t[k] !== undefined ? t[k] : 'N/A',
      });
    }

    setResult({
      gcd: d,
      equation: `${d} = ${first} * (${s[n]}) + ${second} * (${t[n]})`
    });
    setTableData(table);
  };

  const calculateEuclid = () => {
    // 초기화
    setError('');
    setEuclidResult(null);
    setEuclidTableData([]);

    const a1 = parseInt(num1, 10);
    const a2 = parseInt(num2, 10);

    if (!a1 || !a2 || a1 <= 0 || a2 <= 0) {
      setError('양의 정수 두 개를 입력하세요.');
      return;
    }

    // 큰 수를 a, 작은 수를 b로 지정 (계산 과정을 명확하게 하기 위함)
    let first, second;
    if (a1 > a2) {
      first = a1;
      second = a2;
    } else {
      first = a2;
      second = a1;
    }

    let x = first;
    let y = second;
    let table = [];
    let iteration = 1;

    while (y !== 0) {
      const q = Math.floor(x / y);
      const r = x % y;
      table.push({
        iteration,
        a: x,
        b: y,
        q: q,
        r: r,
      });
      x = y;
      y = r;
      iteration++;
    }

    setEuclidResult({
      gcd: x,
      equation: `gcd(${first}, ${second}) = ${x}`
    });
    setEuclidTableData(table);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>확장/일반 유클리드 알고리즘 계산기</h2>
        <div>
          <input
            type="number"
            placeholder="정수 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className='input1'
          />{' '}
          <input
            type="number"
            placeholder="정수 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className='input2'
          />
          <button className='button' onClick={calculateGCD}>계산하기 (확장)</button>{' '}
          <button className='button' onClick={calculateEuclid}>계산하기 (유클리드)</button>
        </div>
        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}

        {/* 확장 유클리드 호제법 결과 */}
        {result && (
          <div>
            <h3>확장 유클리드 호제법 결과</h3>
            <p>gcd({num1}, {num2}) = {result.gcd}</p>
            <p>{result.equation}</p>
          </div>
        )}
        {tableData.length > 0 && (
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <h3>확장 유클리드 호제법 계산 단계</h3>
            <table border="1" cellPadding="5">
              <thead>
                <tr>
                  <th>n</th>
                  <th>q(n)</th>
                  <th>r(n)</th>
                  <th>r(n+1)</th>
                  <th>r(n+2)</th>
                  <th>s(n)</th>
                  <th>t(n)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.iteration}</td>
                    <td>{row.q}</td>
                    <td>{row.r_n}</td>
                    <td>{row.r_n1}</td>
                    <td>{row.r_n2}</td>
                    <td>{row.s}</td>
                    <td>{row.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 일반 유클리드 호제법 결과 */}
        {euclidResult && (
          <div style={{ marginTop: '30px' }}>
            <h3>일반 유클리드 호제법 결과</h3>
            <p>gcd({num1}, {num2}) = {euclidResult.gcd}</p>
            <p>{euclidResult.equation}</p>
          </div>
        )}
        {euclidTableData.length > 0 && (
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <h3>일반 유클리드 호제법 계산 단계</h3>
            <table border="1" cellPadding="5" className='table'>
              <thead>
                <tr>
                  <th>n</th>
                  <th>a</th>
                  <th>b</th>
                  <th>q (a÷b)</th>
                  <th>r (나머지)</th>
                </tr>
              </thead>
              <tbody>
                {euclidTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.iteration}</td>
                    <td>{row.a}</td>
                    <td>{row.b}</td>
                    <td>{row.q}</td>
                    <td>{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;