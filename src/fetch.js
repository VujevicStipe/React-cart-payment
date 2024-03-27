const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData() {
  await sleep(3000);
  return { ime: "pero", prezime: "peric", godine: 22, aktivan: false };
}

export default fetchData