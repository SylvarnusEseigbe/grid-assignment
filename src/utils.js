export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility

  // handle scenario where end is not specified range(0,5) - [0, 1, 2, 3, 4]
  // a conditional check for end

  for (let i = start; i < end; i += step) {
    // loop code

    if(i >= end) return
    output.push(i)
  }

  return output;
};
