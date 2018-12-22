$(document).ready(function() {
list = [[9602,"found 9602"][9504,"found 9504"],[9713,"found 9713"],[9705,"found 9705"]]

function sort(item) {
  for (var index = 1; index < item.length; index++) {
    temp = item[index]
    i = index -1
    while (i >= 0) {
      if (temp < item[i]) {
        item[i + 1] = item[i]
        item[i] = temp
        console.log('top')
        i--;
      }
      else {
        console.log('bottom')
        i--;
      }

    }
  }
  return console.log(item)
}

sort(list);

for (var key in list) {
  console.log(key+'this is the key')
  console.log(list[key]+'this is the value')
}


function find(a, tar) {
  idx = -1
  found = false
  for (var key in a) {
    if (tar === a[key][0]) {
      idx = key
      found = true
    }
  }
  if (found === true) {
    return a[idx][1]
  } else {
    return idx;
  }

}

find(list,24)

$(".here").keyup(function() {
  var box = $(".here").val()
  console.log(box)
  $(".listed").val(find(list,Number(box)));
});

console.log(list[1])
})
