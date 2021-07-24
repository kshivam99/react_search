export function formatText(input, pattern){
    let res="";
    if(!pattern.length) return;
    for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === pattern[0].toUpperCase()) {
          if (input.substring(i, i+pattern.length).toUpperCase() === pattern.toUpperCase()) {
            res += `<span style="color:#3B82F6; font-weight:bold">${input.substring(i, i+pattern.length)}</span>`;
            i+=pattern.length-1;
          }
          else{
            res+=input[i]
          }
        }
        else {
          res += input[i];
        }
      }
      return res;
  }