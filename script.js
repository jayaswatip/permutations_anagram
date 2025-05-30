const dictionary = ["eat", "ate", "tea", "cat", "act", "tac"];

function generatePermutations() {
  const input = document.getElementById("inputText").value;
  const filter = document.getElementById("filterDict").checked;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  if (!input) {
    outputDiv.innerHTML = "Please enter some text.";
    return;
  }

  const chars = input.replace(/\s+/g, '').split(''); // Remove spaces
  const perms = permute(chars);

  const uniquePerms = Array.from(new Set(perms.map(p => p.join('')))); // Unique results

  let results = [];

  if (filter) {
    results = uniquePerms.filter(word => dictionary.includes(word.toLowerCase()));
  } else {
    results = uniquePerms;
  }

  outputDiv.innerHTML = results.length ? results.join("<br>") : "No valid permutations found.";
}

// Recursive function to generate permutations
function permute(arr) {
  if (arr.length <= 1) return [arr];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    let remainingPerms = permute(remaining);
    for (let perm of remainingPerms) {
      result.push([current].concat(perm));
    }
  }

  return result;
}
